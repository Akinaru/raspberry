<h1 align="center">Tutoriel pour pour installer Apache/Php/Mysql/PHPMyAdmin sur la raspberry ainsi que la fixation d'ip et +.</h1>

<h3>https://raspberry-pi.fr/installer-serveur-web-raspberry-lamp/ <span>(installation)</span></h3>
<h3>https://forums.raspberrypi.com/viewtopic.php?t=9928 <span>(perm www-data)</span></h3>
<h3>https://anto.online/code/how-to-run-php-script-root/ <span>(www-data no-pass)</span></h3>
<h3>https://www.digitalocean.com/community/questions/how-to-install-manually-phpmyadmin-on-ubuntu <span>(phpmyadmin manually)</span></h3>



<h2>🧾 Appache:</h2>
(installation d'apache)
<ul>
	<li>sudo apt install apache2</li>
</ul>

(droit d'accès au fichiers)
<ul>
	<li>sudo chown -R pi:www-data /var/www/html/</li>
	<li>sudo chmod -R 770 /var/www/html/</li>
</ul>


<h2>🧾 PHP:</h2>
(installation de PHP)
<ul>
	<li>sudo apt install php php-mbstring</li>
</ul>
  
<h2>🧾 Mysql:</h2>
(installation de mysql)
<ul>
	<li>sudo apt install mariadb-server php-mysql</li>
</ul>
(changer les droits pour l'utilisateur root)
<ul>
	<li>DROP USER 'root'@'localhost';</li>
	<li>CREATE USER 'root'@'localhost' IDENTIFIED BY 'password';</li>
	<li>GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;</li>
</ul>
(installer mysql-connector pour python !!! BIEN METTRE SUDO SINON LES MODULES S'INSTALLENT DANS /PI/LOCAL/LIB AU LIEU DE USR/LOCAL/LIB)
<ul>
	<li>sudo pip install mysql-connector</li>
</ul>

<h2>🧾 PHPMyAdmin:</h2>
(installation de PhpMyAdmin)
(mettre no à "dbconfig-common")
<ul>
	<li>sudo apt install phpmyadmin</li>
</ul>

(activer mysqli)
<ul>
	<li>sudo phpenmod mysqli</li>
	<li>sudo /etc/init.d/apache2 restart</li>
</ul>
(tester localhost/phpmyadmin et si ca ne marche pas "sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin")

<h2>🧾 Remove PHP password error:</h2>
<ul>
	<li>cd /var/www/html/phpmyadmin</li>
	<li>sudo nano config.sample.inc.php</li>
	<li>$cfg['Servers'][$i]['AllowNoPassword'] = TRUE;</li>
</ul>
(et renommer le fichier en config.inc.php (enlever le sample.))


<h2>🧾 Internet:</h2>
(ouvrir le fichier config et mettre "<bold>static ip_address=172.21.190.160</bold>" au début)
<ul>
	<li>sudo nano /etc/dhcpcd.conf</li>
</ul>
(ouvrir les preférences de la raspbery)
<ul>
	<li>Raspberry Pi Configuration/ Interfaces / SSH -> Enable</li>
	</ul>
 
<h2>🧾 Donner la permission sudo à www-data:</h2>
<ul>
	<li>chown www-data:www-data /var/www</li>
	<li>chmod 775 /var/www</li>
</ul>
 
<h2>🧾 Pour enlever la demande de mot de passe par le serveur web (PHP):</h2>
<ul>
	<li>sudo visudo -f /etc/sudoers.d/myOverrides</li>
</ul>
(et ajouter "www-data ALL=(ALL) NOPASSWD: ALL")
