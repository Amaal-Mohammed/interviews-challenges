> **WE ARE HIRING:** [Apply Now](https://www.knawat.com/career/).

# DevOps Engineer

<strong>TL;DR,</strong> This challenge expects you to build a deployment with Kubernetes to any API with Database. You also need to add some other stuff like auto-scale, CronJob, and Secrets.

## Evaluation criteria:

In addition to the functionality, we will also evaluate files naming convention, readme file, ease of setup, and maybe Git messages.

## Services:

- Database
  - MongoDB or Elasticsearch
  - Database credentials should be in secrets
  - We need Persistent Storage to save data
  - ReplicaSet is nice to have, but not required
- App
  - Deploy any simple Node.js or Python app [this one is good](https://knative.dev/docs/serving/samples/hello-world/helloworld-nodejs/)

## Configs:

- Use secret to save database credentials and pass it to the web app as environment variables.
- CronJob task to run every 2 mins and trigger https://localhost/cron-endpoint

## How to submit?

Fork this repo and create a pull request once you feel the code is ready.
