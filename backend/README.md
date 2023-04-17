# SuperCloudPayBackend

## Environment Setup

`pip install --user pipenv`<br>
`cd {YOUR_PATH}/SuperCloudPayBackend`<br>
`pipenv install`

## Migrate Database

`pipenv shell`<br>
`python manage.py makemigrations`<br>
`python manage.py migrate`

## Create Fake Data

`pipenv shell`<br>
`python -m pip install requests`<br>
`python callAPI.py`<br>

## Run Server

`pipenv shell`<br>
`python manage.py runserver`
