<h1>Appache:</h1>
  (installation d'apache)
- sudo apt install apache2

  (droit d'accès au fichiers)
- sudo chown -R pi:www-data /var/www/html/
- sudo chmod -R 770 /var/www/html/

PHP:
  (installation de PHP)
- sudo apt install php php-mbstring
  
Mysql:
  (installation de mysql)
- sudo apt install mariadb-server php-mysql

PHPMyAdmin:
  (installation de PhpMyAdmin)
  (mettre no à "dbconfig-common")
- sudo apt install phpmyadmin
  (activer mysqli)
- sudo phpenmod mysqli
- sudo /etc/init.d/apache2 restart
  (tester localhost/phpmyadmin et si ca ne marche pas "sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin")
 
Changer l'ip:
  (ouvrir le fichier config et mettre "static ip_address=172.21.190.160" au début)
- sudo nano /etc/dhcpcd.conf
 
Donner la permission sudo à www-data:
- chown www-data:www-data /var/www
- chmod 775 /var/www
 
 Pour enlever la demande de mot de passe par le serveur web (PHP):
 - sudo visudo -f /etc/sudoers.d/myOverrides
  (et ajouter "www-data ALL=(ALL) NOPASSWD: ALL")
