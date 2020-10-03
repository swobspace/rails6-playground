# README

## creating fake tasks for playing around

```ruby
(1..100).each do |idx|
  Task.create(
    start: Faker::Date.between(from: '2020-01-01', to: '2020-12-31'),
    deadline: Faker::Date.between(from: '2021-01-01', to: '2021-12-31'),
    subject: Faker::Lorem.sentence,
    responsible: Faker::Name.name,
  )
end
```

