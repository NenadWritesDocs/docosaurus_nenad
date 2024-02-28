# Onboarding guide for backend developers

Welcome to the team! In order to get started efficiently, please follow the steps outlined below to set up your local development environment.

## Tools and files required

Ensure you have access to the following tools and files:

- **PHP Storm:** A development tool for PHP and web projects.
- **Docker:** A platform and toolset for building, packaging, and deploying applications as lightweight, portable containers.
- **Grain and Editor repositories:** These repositories should already be cloned from Azure DevOps. If not, please reach out to the DevOps team for access.

## Configuring necessary files

### Configuring .env file

The `.env` file stores necessary variables for running tests on your local environment. Follow these steps to create and configure it:

1. Open the Grain project in PHP Storm.
2. Create a new file called `.env.local` in the project.
3. Copy the following text into the file:

```plaintext
EDITOR_URL=/editor
REDIS_URL=redis://Grain_redis
REDIS_URL_APP=redis://Grain_redis
DATABASE_URL=mysql://root:Grain@Grain_mysql:3306/Jabberwockyxr?serverVersion=8.0.32
DATABASE_URL_READ=mysql://root:Grain@Grain_mysql:3306/Jabberwockyxr?serverVersion=8.0.32
API_ADMIN_EMAIL=youremail@peregrine.dev
API_ADMIN_PASSWORD=daslkdjalskdjalskdjl
API_ADMIN_KEY=sdsdsd
API_ADMIN_SECRET=aklsjdlksajdlksjdlkasjdlkja
MESSENGER_TRANSPORT_DSN=redis://Grain_redis:6379/messages
Jabberwocky_TITLE_ID={your_Jabberwocky_title_ID}
Jabberwocky_SECRET_KEY={your_Jabberwocky_secret_key}
Jabberwocky_URL_PROTOCOL=https
Jabberwocky_DOMAIN=Jabberwockyapi.com
TWITCH_CLIENT_ID=dkfjdlksfjlsdkjfldksjfau85y2c7
TWITCH_CLIENT_SECRET=sdf;lksdflkjdsflkjsd2qwqhn
TWITCH_UNIQUE_ID=887843368
```

> Note: Replace placeholders with your own information (e.g., email address, Jabberwocky account details).

Repeat the same process to create `.env.test.local` file.

### Configuring phpunit.xml file

Add the `phpunit.xml` file to run tests on your local machine. Follow these steps:

1. Open the Grain project in PHP Storm.
2. Create a new file called `phpunit.xml` in the project.
3. Copy the content of `phpunit.xml.dist` file into the newly created `phpunit.xml`.
4. Add the following code snippet within the `<php>` tag:

```xml
<env name="XDEBUG_MODE" value="coverage" />
<ini name="memory_limit" value="1G" />
<server name="DATABASE_URL" value="mysql://root:Grain@Grain_mysql:3306/Jabberwockyxr?serverVersion=8.0" force="true" />
<server name="DATABASE_URL_READ" value="mysql://root:Grain@Grain_mysql:3306/Jabberwockyxr?serverVersion=8.0" force="true" />
```

Your `phpunit.xml` file is now configured.

### Configuring docker-compose.yml file

Configure the `docker-compose.yml` file to build the Peregrine X app locally:

1. Open the Grain project in PHP Storm.
2. Create a new file called `docker-compose.yml` in the project.
3. Copy the content of `docker-compose.yml.dist` into the newly created `docker-compose.yml`.

### Updating the localhost file

To run Peregrine X locally, update the localhost file:

1. Type the following command in Terminal: `sudo nano /etc/hosts`.
2. Enter your device password.
3. Paste the following line on the next screen: `127.0.0.1 Grain.local.peregrinex.com`.
4. Save the file with `Ctrl + O`.
5. Exit the editor with `Ctrl + X`.

### Building the app in docker

Now, you can build the app locally with Docker:

Type the following command in Terminal:

```bash
docker-compose up
```

Your Peregrine X application is now running locally and accessible at: [http://Grain.local.peregrinex.com](http://Grain.local.peregrinex.com). Proceed to initialize the database setup in your browser and populate your database with data.

Feel free to reach out to the team if you encounter any issues during this setup process. 