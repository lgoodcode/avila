# [AvilaCare](https://avilacare.netlify.app)

This is a sample project to potentially rebuild an entire new site for [AvilaCare](https://avilacare.com/).

It uses PayloadCMS for a headless CMS to allow the potential client to be able
to modify the data on their own at their convencience without requiring them
to contact the devloper for menial modifications.

## CMS

The CMS requires authentication but, the code can be viewed at the [repository](https://github.com/lgoodcode/avila-cms)

# Stack

React, Typescript, NextJS, Chakra-Ui

# Deployment

To run the app, you'll need to define the `NEXT_PUBLIC_PAYLOAD_API_URL` environment variable
with the domain that is hosting the CMS to properly make the API requests to fetch the data
from the CMS.