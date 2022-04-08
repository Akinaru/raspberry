<h1>Appache:</h1>
(installation d'apache)
<li>
  <h2>sudo apt install apache2</h2>
</li>

(droit d'accès au fichiers)
<li>
  sudo chown -R pi:www-data /var/www/html/
  sudo chmod -R 770 /var/www/html/
</li>

<h1>PHP:</h1>
(installation de PHP)
<li>
  sudo apt install php php-mbstring
</li>
  
<h1>Mysql:</h1>
(installation de mysql)
<li>
  sudo apt install mariadb-server php-mysql
</li>

<h1>PHPMyAdmin:</h1>
(installation de PhpMyAdmin)
(mettre no à "dbconfig-common")
<li>
  sudo apt install phpmyadmin
</li>

(activer mysqli)
<li>
  sudo phpenmod mysqli
  sudo /etc/init.d/apache2 restart
</li>
(tester localhost/phpmyadmin et si ca ne marche pas "sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin")
 
<h1>Changer l'ip:</h1>
(ouvrir le fichier config et mettre "static ip_address=172.21.190.160" au début)
<li>
  sudo nano /etc/dhcpcd.conf
</li>
 
<h1>Donner la permission sudo à www-data:</h1>
<li>
  chown www-data:www-data /var/www
  chmod 775 /var/www
</li>
 
<h1>Pour enlever la demande de mot de passe par le serveur web (PHP):</h1>
<li>
  sudo visudo -f /etc/sudoers.d/myOverrides
</li>
(et ajouter "www-data ALL=(ALL) NOPASSWD: ALL")
