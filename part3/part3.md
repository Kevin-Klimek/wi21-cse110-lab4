## Debugging
The bug was that the 2 numbers to be added were grabbed as Strings instead of as Numbers. This caused the sum operation to concatenate the two numbers as a string, instead of actually calculate their sum. To fix this, I'd wrap document.getElementById() with parseInt(), so that a Number is assigned instead of a string to both the variables num1 and num2. We will notice in the debugging tool that now typeof num1, num2, and sum are now Numbers, and that the output for 3 + 4 is now 7 on the webpage instead of 34.
## Network Info
The name of the new json file is citylots.json  
part2.js initiated the download of the new file. (Called from onClick on the index html page)  
The file size is 11.7 MB.  
It took 79 ms to download.

User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36  
(ran on Chrome)  
It came from an Apache server.  
It was last modified on Tue, 26 Jan 2021 22:14:13 (GMT)  
The content type is application/json

fetchData in part2.js made the request.