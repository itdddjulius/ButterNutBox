# Scam Detection Task

We’ve got an interesting issue for you to think about. We sometimes have been people who try to sign up multiple times using a discount. We want to be able to subtly detect and block these people. 
The way we’d like to detect them is by checking to see if they match any two of the following three attributes of a pre-existing customer:
Last Name
Postcode

Credit Card By checking the last four digits, and the card expiry, and matching both of them)
We would also like you to write a test file to test all the scenarios. The various models (users, addresses & credit cards) should be stored in a database and you should aim to optimize the SQL for efficiency. Feel free to use an ORM like ActiveRecord.
The following code snippets are ruby versions of how the class should be laid out, but they should be easily translatable into another language like Python or Javascript You are free to use whatever language you are most comfortable with here) and any ORM Again, feel free to use whatever you are most comfortable with). So we’d like you to create a FraudDetector class whose skeleton is the following:

class FraudDetector  attr_reader :last_name, :postcode, :card_number, :card_expiry 
 
  def initialize(last_name, postcode, card_number, card_expiry) 
Scam Detection Task 2
   ...   end 
 
 def fraudulent?     # TODO. Return true if they are fraudulent.   end end

# Our models are the following

class User   has_one :address  has_one :credit_card end

And our database structure is as follows:

users ===== last_name 
 
addresses ========= user_id postcode 
 
credit_cards ============ 
 
last_four_digits expiry_month expiry_year

# Your task is to:
1. Implement the FraudDetector class.
2. Implement a test file for the FraudDetector class TDD is encouraged if you want to do this part first).
3. Review how robust this system is. How likely is it that a false positive occurs? Can you think of other detection systems that might be more effective?

# Scam Detection Task 3
A couple of notes:

A postcode could include spaces, you should be able to match postcodes even if they have a different amount of spaces in it.

The last name might be lower case, or upper case.

The card_expiry will be the format “06/18” , or “06/2018” , “6/18” or “6/2018”

Think deeply about all of the possible test cases here.

Feel free to build it out as a rails task so you have access to ActiveRecord/RSpec out of the box etc
We’re keen to ensure that it’s a collaborative effort; feel free to check in regularly to discuss any aspect of the project.

=====================================================

ubuntu@DESKTOP-D7QB2EH:/mnt/c/Users/user/Desktop/JO/My Clients/ButterNutBox/scam$ ls -altr
total 16
drwxrwxrwx 1 ubuntu ubuntu 4096 Sep 25 13:15 ..
-rwxrwxrwx 1 ubuntu ubuntu  694 Sep 25 14:28 hello.html
-rwxrwxrwx 1 ubuntu ubuntu 4756 Sep 25 14:28 ReadMe.md
-rwxrwxrwx 1 ubuntu ubuntu 1319 Sep 25 14:29 hello.py
drwxrwxrwx 1 ubuntu ubuntu 4096 Sep 25 14:29 .
ubuntu@DESKTOP-D7QB2EH:/mnt/c/Users/user/Desktop/JO/My Clients/ButterNutBox/scam$

=================================

ubuntu@DESKTOP-D7QB2EH:/mnt/c/Users/user/Desktop/JO/My Clients/ButterNutBox/scam$

=================================

ubuntu@DESKTOP-D7QB2EH:/mnt/c/Users/user/Desktop/JO/My Clients/ButterNutBox/scam$
ubuntu@DESKTOP-D7QB2EH:/mnt/c/Users/user/Desktop/JO/My Clients/ButterNutBox/scam$

==================================================

ubuntu@DESKTOP-D7QB2EH:/mnt/c/Users/user/Desktop/JO/My Clients/ButterNutBox/scam$ sudo apt install python3.7
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following additional packages will be installed:
  libpython3.7-minimal libpython3.7-stdlib python3.7-distutils python3.7-lib2to3 python3.7-minimal
Suggested packages:
  python3.7-venv python3.7-doc binfmt-support
The following NEW packages will be installed:
  libpython3.7-minimal libpython3.7-stdlib python3.7 python3.7-distutils python3.7-lib2to3 python3.7-minimal
0 upgraded, 6 newly installed, 0 to remove and 39 not upgraded.
Need to get 4,824 kB of archives.
After this operation, 24.2 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://ppa.launchpad.net/deadsnakes/ppa/ubuntu xenial/main amd64 libpython3.7-minimal amd64 3.7.4-1+xenial2 [597 kB]
Get:2 http://ppa.launchpad.net/deadsnakes/ppa/ubuntu xenial/main amd64 python3.7-minimal amd64 3.7.4-1+xenial2 [1,792 kB]
Get:3 http://ppa.launchpad.net/deadsnakes/ppa/ubuntu xenial/main amd64 libpython3.7-stdlib amd64 3.7.4-1+xenial2 [1,786 kB]
Get:4 http://ppa.launchpad.net/deadsnakes/ppa/ubuntu xenial/main amd64 python3.7-lib2to3 all 3.7.4-1+xenial2 [121 kB]
Get:5 http://ppa.launchpad.net/deadsnakes/ppa/ubuntu xenial/main amd64 python3.7-distutils all 3.7.4-1+xenial2 [190 kB]
Get:6 http://ppa.launchpad.net/deadsnakes/ppa/ubuntu xenial/main amd64 python3.7 amd64 3.7.4-1+xenial2 [336 kB]
Fetched 4,824 kB in 4s (1,075 kB/s)
Selecting previously unselected package libpython3.7-minimal:amd64.
(Reading database ... 158047 files and directories currently installed.)
Preparing to unpack .../libpython3.7-minimal_3.7.4-1+xenial2_amd64.deb ...
Unpacking libpython3.7-minimal:amd64 (3.7.4-1+xenial2) ...
Selecting previously unselected package python3.7-minimal.
Preparing to unpack .../python3.7-minimal_3.7.4-1+xenial2_amd64.deb ...
Unpacking python3.7-minimal (3.7.4-1+xenial2) ...
Selecting previously unselected package libpython3.7-stdlib:amd64.
Preparing to unpack .../libpython3.7-stdlib_3.7.4-1+xenial2_amd64.deb ...
Unpacking libpython3.7-stdlib:amd64 (3.7.4-1+xenial2) ...
Selecting previously unselected package python3.7-lib2to3.
Preparing to unpack .../python3.7-lib2to3_3.7.4-1+xenial2_all.deb ...
Unpacking python3.7-lib2to3 (3.7.4-1+xenial2) ...
Selecting previously unselected package python3.7-distutils.
Preparing to unpack .../python3.7-distutils_3.7.4-1+xenial2_all.deb ...
Unpacking python3.7-distutils (3.7.4-1+xenial2) ...
Selecting previously unselected package python3.7.
Preparing to unpack .../python3.7_3.7.4-1+xenial2_amd64.deb ...
Unpacking python3.7 (3.7.4-1+xenial2) ...
Processing triggers for man-db (2.7.5-1) ...
Processing triggers for gnome-menus (3.13.3-6ubuntu3.1) ...
Processing triggers for desktop-file-utils (0.22-1ubuntu5.2) ...###########.........................................]
Processing triggers for bamfdaemon (0.5.3~bzr0+16.04.20180209-0ubuntu1) ...
Rebuilding /usr/share/applications/bamf-2.index...
Processing triggers for mime-support (3.59ubuntu1) ...
Setting up python3.7-minimal (3.7.4-1+xenial2) ...################################..................................]
Setting up libpython3.7-stdlib:amd64 (3.7.4-1+xenial2) ...##############################............................]
Setting up python3.7-lib2to3 (3.7.4-1+xenial2) ...############################################......................]
Setting up python3.7-distutils (3.7.4-1+xenial2) ...#################################################...............]
Setting up python3.7 (3.7.4-1+xenial2) ...#################################################################.........]
ubuntu@DESKTOP-D7QB2EH:/mnt/c/Users/user/Desktop/JO/My Clients/ButterNutBox/scam$ python3.7 --version
Python 3.7.4
ubuntu@DESKTOP-D7QB2EH:/mnt/c/Users/user/Desktop/JO/My Clients/ButterNutBox/scam$

===============================================

ubuntu@DESKTOP-D7QB2EH:/mnt/c/Users/user/Desktop/JO/My Clients/ButterNutBox/scam$ python3.7 -m pip install transcrypt
Collecting transcrypt
Collecting mypy (from transcrypt)
  Downloading https://files.pythonhosted.org/packages/73/4f/ed4fbcee5899b1cefe39ebb191a8fdc0c5a03b68930d3f929449b7d2101a/mypy-0.720-cp37-cp37m-manylinux1_x86_64.whl (20.7MB)
    100% |¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦| 20.7MB 35kB/s
Collecting mypy-extensions<0.5.0,>=0.4.0 (from mypy->transcrypt)
  Using cached https://files.pythonhosted.org/packages/4d/72/8d54e2b296631b9b14961d583e56e90d9d7fba8a240d5ce7f1113cc5e887/mypy_extensions-0.4.1-py2.py3-none-any.whl
Collecting typed-ast<1.5.0,>=1.4.0 (from mypy->transcrypt)
  Downloading https://files.pythonhosted.org/packages/fb/56/dd4e168a0009da85c78c6cfe91f5b2df2c7bbed60f3ba778c4a71289e6fb/typed_ast-1.4.0-cp37-cp37m-manylinux1_x86_64.whl (736kB)
    100% |¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦| 737kB 707kB/s
Collecting typing-extensions>=3.7.4 (from mypy->transcrypt)
  Using cached https://files.pythonhosted.org/packages/27/aa/bd1442cfb0224da1b671ab334d3b0a4302e4161ea916e28904ff9618d471/typing_extensions-3.7.4-py3-none-any.whl
Installing collected packages: mypy-extensions, typed-ast, typing-extensions, mypy, transcrypt
Successfully installed mypy mypy-extensions transcrypt typed-ast typing-extensions
You are using pip version 8.1.1, however version 19.2.3 is available.
You should consider upgrading via the 'pip install --upgrade pip' command.
ubuntu@DESKTOP-D7QB2EH:/mnt/c/Users/user/Desktop/JO/My Clients/ButterNutBox/scam$

====================================================


