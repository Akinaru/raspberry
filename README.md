<h1>Appache:</h1>
  (installation d'apache)
- sudo apt install apache2

  (droit d'accès au fichiers)
- sudo chown -R pi:www-data /var/www/html/
- sudo chmod -R 770 /var/www/html/

<h1>PHP:</h1>
  (installation de PHP)
- sudo apt install php php-mbstring
  
<h1>Mysql:</h1>
  (installation de mysql)
- sudo apt install mariadb-server php-mysql

<h1>PHPMyAdmin:</h1>
  (installation de PhpMyAdmin)
  (mettre no à "dbconfig-common")
- sudo apt install phpmyadmin
  (activer mysqli)
- sudo phpenmod mysqli
- sudo /etc/init.d/apache2 restart
  (tester localhost/phpmyadmin et si ca ne marche pas "sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin")
 
<h1>Changer l'ip:</h1>
  (ouvrir le fichier config et mettre "static ip_address=172.21.190.160" au début)
- sudo nano /etc/dhcpcd.conf
 
<h1>Donner la permission sudo à www-data:</h1>
- chown www-data:www-data /var/www
- chmod 775 /var/www
 
<h1>Pour enlever la demande de mot de passe par le serveur web (PHP):</h1>
- sudo visudo -f /etc/sudoers.d/myOverrides
  (et ajouter "www-data ALL=(ALL) NOPASSWD: ALL")
