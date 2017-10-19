---
title: SequelPro + Vagrant + MySQL
author: singuerinc
layout: post
categories:
  - mysql
  - vagrant
  - sequelpro
---

Connect SequelPro to Vagrant MySQL Database

### Vagrant Options
```javascript
config.vm.network :forwarded_port, guest: 3306, host: 3306
config.vm.network "private_network", ip: "192.168.50.4"
```

### SequelPro SSH Options
<table>
	<tbody>
		<tr>
			<td>Name</td>
			<td>vagrant_connection</td>
		</tr>
		<tr>
			<td>MySQL Host</td>
			<td>127.0.0.1</td>
		</tr>
		<tr>
			<td>Username</td>
			<td>root</td>
		</tr>
		<tr>
			<td>Password</td>
			<td>&lt;blank&gt;</td>
		</tr>
		<tr>
			<td>Database</td>
			<td>&lt;optional&gt;</td>
		</tr>
		<tr>
			<td>Port</td>
			<td>3306</td>
		</tr>
		<tr>
			<td>SSH Host</td>
			<td>192.168.50.4</td>
		</tr>
		<tr>
			<td>SSH User</td>
			<td>vagrant</td>
		</tr>
		<tr>
			<td>SSH Password</td>
			<td>vagrant</td>
		</tr>
		<tr>
			<td>SSH Port</td>
			<td>&lt;optional&gt;</td>
		</tr>
	</tbody>
</table>