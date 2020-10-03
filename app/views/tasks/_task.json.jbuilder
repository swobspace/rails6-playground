json.extract! task, :id, :start, :deadline, :subject, :responsible, :created_at, :updated_at
json.url task_url(task, format: :json)
