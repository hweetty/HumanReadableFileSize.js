human-filesize.js
========================
Simple function that returns human readable representation of a given file size.

Examples
--------------
    console.log(fileSize(50000));           // 50 KB
    console.log(fileSize(1843875982));      // 1.8 GB
    console.log(fileSize(1843875982, 0));   // 2 GB
    console.log(fileSize(1843875982, 3));   // 1.844 GB
    console.log(fileSize(24886424));        // 24.9 MB
    console.log(fileSize(445));             // 445 B