# algocode problem setting service

________________

# How routing is working in the project

 - /api/v1/problem/ping
  - because route starts with /api
   /api      -> /v1        -> /problems    -> /ping
   apiRouter -> v1Router -> problemRouter -> problemmController -> service layer.


# Agenda

- to create a problem that you can see in platforms like leetcode.
- where it has a title, image and testcase. create, reading updating and deleting those problems


# architecture

- Enhanced MVC used which has services, repositories and more.


# TODO

- need to do more services for evaluator part and problem submission part, this is just a creation part.