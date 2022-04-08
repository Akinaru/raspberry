<h1 align="center">Tutoriel pour pour installer Apache/Php/Mysql/PHPMyAdmin sur la raspberry ainsi que la fixation d'ip et +.</h1>

<h3>https://raspberry-pi.fr/installer-serveur-web-raspberry-lamp/</h3> (installation)
<h3>https://forums.raspberrypi.com/viewtopic.php?t=9928</h3> (perm www-data)
<h3>https://anto.online/code/how-to-run-php-script-root/</h3> (www-data no-pass)



<h2>Appache:</h2>
(installation d'apache)
<li>
  <a href="">sudo apt install apache2</a>
</li>

(droit d'accès au fichiers)
<li>
  <a href="">sudo chown -R pi:www-data /var/www/html/</a>
  <a href="">sudo chmod -R 770 /var/www/html/</a>
</li>

<h2>PHP:</h2>
(installation de PHP)
<li>
  <a href="">sudo apt install php php-mbstring</a>
</li>
  
<h2>Mysql:</h2>
(installation de mysql)
<li>
  <a href="">sudo apt install mariadb-server php-mysql</a>
</li>

<h2>PHPMyAdmin:</h2>
(installation de PhpMyAdmin)
(mettre no à "dbconfig-common")
<li>
  <a href="">sudo apt install phpmyadmin</a>
</li>

(activer mysqli)
<li>
  <a href="">sudo phpenmod mysqli</a>
  <a href="">sudo /etc/init.d/apache2 restart</a>
</li>
(tester localhost/phpmyadmin et si ca ne marche pas "sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin")
 
<h2>Changer l'ip:</h2>
(ouvrir le fichier config et mettre "static ip_address=172.21.190.160" au début)
<li>
  <a href="">sudo nano /etc/dhcpcd.conf</a>
</li>
 
<h2>Donner la permission sudo à www-data:</h2>
<li>
  <a href="">chown www-data:www-data /var/www</a>
  <a href="">chmod 775 /var/www</a>
</li>
 
<h2>Pour enlever la demande de mot de passe par le serveur web (PHP):</h2>
<li>
  <a href="">sudo visudo -f /etc/sudoers.d/myOverrides</a>
</li>
(et ajouter "www-data ALL=(ALL) NOPASSWD: ALL")
