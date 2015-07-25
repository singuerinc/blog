---
title: Step by step Redmine installation
author: singuerinc
layout: post
categories:
  - redmine
  - apache
  - pusion
  - passenger
  - mysql
  - rvm
  - ruby
---

<!--break-->

### 1. Install Apache

    $ apt-get install apache2

### 2. Install rmagick & nokigiri dependencies

    $ apt-get install -y build-essential imagemagick libmagickcore-dev libmagickwand-dev libxml2 libxml2-dev libxslt1-dev

### 3. Install MySQL
    $ apt-get update
    $ apt-get install -y mysql-client-core-5.5 mysql-server mysql-client libmysqlclient-dev
    // enter your top-secret-password

### 4. Restart MySQL
    $ /etc/init.d/mysql stop
    $ /etc/init.d/mysql start
    $ /usr/bin/mysqld_safe --user=mysql --skip-grant-tables

### 5. Download Redmine
    curl -O http://www.redmine.org/releases/redmine-2.3.4.zip
    unzip redmine-2.3.4.zip

### 6. Change database configuration
    $ cp /config/database.yml.example /config/database.yml
    $ vim /config/database.yml
    // user: redmine
    // pass: redminepassword

### 7. Install RVM + Ruby
    $ curl -L https://get.rvm.io | bash -s stable
    // logout or source here
    $ rvm install 2.1.0 --autolibs=enabled && rvm --fuzzy alias create default 2.1.0

### 8. Install Pusion Passenger

1. Install Pussion Passenger + Apache mod

        $ apt-get install -y libcurl4-openssl-dev apache2-threaded-dev libapr1-dev libaprutil1-dev
        $ gem install passenger
        $ passenger-install-apache2-module


2. Add the following lines to `/etc/apache2/mods-available/passenger.load`:

        LoadModule passenger_module /usr/local/rvm/gems/ruby-2.1.0/gems/passenger-4.0.36/buildout/apache2/mod_passenger.so

3. Add the following lines to `/etc/apache2/mods-available/passenger.conf`:

        <IfModule mod_passenger.c>
          PassengerRoot /usr/local/rvm/gems/ruby-2.1.0/gems/passenger-4.0.36
          PassengerDefaultRuby /usr/local/rvm/gems/ruby-2.1.0/wrappers/ruby
        </IfModule>

4. Enable Passenger as Apache module:

        sudo a2enmod passenger  

5. Add a virtual host to your Apache configuration file and set its DocumentRoot to `/var/sites/redmine.domain.com/public`:

        <VirtualHost *:80>
           ServerName redmine.domain.com
           DocumentRoot /var/sites/redmine.domain.com/public
           <Directory /var/sites/redmine.domain.com/public>
              Require all granted
              Options FollowSymLinks
              AllowOverride none
              Order allow,deny
              Allow from all
              PassengerUser root
           </Directory>
        </VirtualHost>

### 8. Enable Apache site

    $ sudo a2ensite redmine

### 9. Install dependencies

    $ gem install bundler

### 10. Install Redmine dependencies

    $ bundle install

### 11. Session store secret generation
This step generates a random key used by Rails to encode cookies storing session data thus preventing their tampering.

    $ rake generate_secret_token

### 12. Database schema objects creation
Create the database structure

    $ RAILS_ENV=production rake db:migrate

### 13. File system permissions
The user account running the application must have write permission on the following subdirectories:

1. files (storage of attachments)
2. log (application log file production.log)
3. tmp and tmp/pdf (create these ones if not present, used to generate PDF documents among other things)
4. public/plugin_assets (assets of plugins).

<b></b>

    $ mkdir -p tmp tmp/pdf public/plugin_assets
    $ sudo chown -R nobody:nogroup files log tmp public/plugin_assets
    $ sudo chmod -R 755 files log tmp public/plugin_assets

### 14. Email configuration (gmail)

    $ cp config/configuration.yml.example config/configuration.yml
    $ vim config/configuration.yml

Edit `configuration.yml`

    production:
      email_delivery:
        delivery_method: :smtp
        smtp_settings:
          enable_starttls_auto: true
          address: "smtp.gmail.com"
          port: '587'
          domain: "smtp.gmail.com"
          authentication: :plain
          user_name: "redmine.domain@gmail.com"
          password: "secret"

### 15. Theme (optional)

    $ cd public/themes/
    $ curl -O http://www.redminecrm.com/license_manager/9722/circle_theme-1_0_1.zip
    $ unzip circle_theme-1_0_1.zip

### 16. Test Redmine

    $ ruby script/rails server webrick -e production

> Note: Webrick is not suitable for production use, please only use webrick for testing that the installation up to this point is functional.

Fatto!
