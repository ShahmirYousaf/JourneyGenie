from flask import Flask, jsonify, request
from pyspark.sql import SparkSession
import pandas as pd
import os

app = Flask(__name__)

@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    # folder_path = r'D:\Datasets'
    # final_file = 'yelp_dataset_dataset_business_clean_withoriginalfeature.csv'
    # final_path = os.path.join(folder_path, final_file)

    # Load data and Spark session
    final_file = 'yelp_dataset_dataset_business_clean_withoriginalfeature.csv'
    final_path = final_file  
    data = pd.read_csv(final_path)
    spark = SparkSession.builder.appName("RecommendationSystem").getOrCreate()
    business = spark.createDataFrame(data)

    # Parse request data
    req_data = request.get_json()
    state = req_data['state']
    city = req_data['city']
    category = req_data['category']
    day = req_data['day']
    kids = req_data['kids']

    # Recommendation logic
    recommendation = recommendations(state, city, category, day, kids)

    return jsonify(recommendation)

# define the function to provide the recommendation based on the users' input
from pyspark.sql.functions import col
def recommendations(state, city, category, day, kids=False):
    recommendation = business[['name', 'stars', 'review_count', 'address'] +
                              ['city', 'state', category, day, 'GoodForKids']].filter(
        (col('state') == state) &
        (col('city') == city) &
        (col(category) == True) &
        (col(day) == True) &
        (business.review_count > 100) &
        (business.stars >= 4.5)).orderBy(col('review_count'), ascending=False)
    if kids == 'Yes':
        recommendation = recommendation.filter(col('GoodForKids') == True)
    return recommendation[['name', 'stars', 'review_count', 'address']].collect()

if __name__ == '__main__':
    app.run(debug=True)
