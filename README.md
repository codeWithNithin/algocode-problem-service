# algocode problem setting service

________________

# How routing is working in the project

 - /api/v1/problem/ping
  - because route starts with /api
   /api      -> /v1        -> /problems    -> /ping
   apiRouter -> v1Router -> problemRouter -> problemmController -> service layer.