cd /app 
pip install -r requirements.txt
/spark/bin/spark-submit --packages com.crealytics:spark-excel_2.12:0.13.5,com.databricks:spark-xml_2.12:0.15.0 ./consumer.py