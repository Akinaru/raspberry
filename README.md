<h1 align="center">Tutoriel pour pour installer Apache/Php/Mysql/PHPMyAdmin sur la raspberry ainsi que la fixation d'ip et +.</h1>

<h2>Appache:</h2>
(installation d'apache)
<li>
  <a href="">sudo apt install apache2</a>
</li>

(droit d'accès au fichiers)
<li>
  sudo chown -R pi:www-data /var/www/html/
  sudo chmod -R 770 /var/www/html/
</li>

<h2>PHP:</h2>
(installation de PHP)
<li>
  sudo apt install php php-mbstring
</li>
  
<h2>Mysql:</h2>
(installation de mysql)
<li>
  sudo apt install mariadb-server php-mysql
</li>

<h2>PHPMyAdmin:</h2>
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
 
<h2>Changer l'ip:</h2>
(ouvrir le fichier config et mettre "static ip_address=172.21.190.160" au début)
<li>
  sudo nano /etc/dhcpcd.conf
</li>
 
<h2>Donner la permission sudo à www-data:</h2>
<li>
  chown www-data:www-data /var/www
  chmod 775 /var/www
</li>
 
<h2>Pour enlever la demande de mot de passe par le serveur web (PHP):</h2>
<li>
  sudo visudo -f /etc/sudoers.d/myOverrides
</li>
(et ajouter "www-data ALL=(ALL) NOPASSWD: ALL")
