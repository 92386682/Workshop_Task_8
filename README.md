#WORKSHOP NUMBER 8
#TASK
•	Create a sketch that makes an API call to gather data from an external source. Here is a list of free-to-use APIsLinks to an external site.which do not require authentication.
•	Visual elements of the sketch should be determined by data retrieved from the external source.
•	Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

WORKSHOP NOTES

##Initial plan (written before coding)
Working with the random user API, an API that generates random information including name, gender, location and a headshot, I decided to make a front-end that presents all the information in a passport-esque manner.
https://randomuser.me/api/?format=json
##Process
Beginning by following the workshop steps, and running a test with a Kanye West quote generator, I moved onto pulling data from the more complex random user API.
  ![79](https://github.com/user-attachments/assets/9443ca89-fa83-4dd9-861e-8ba943c9085c)

 This was held up by a strange bug that necessitated an array [0] to be added to the function, with no explanation given and no logical reason for this. 
 ![80](https://github.com/user-attachments/assets/c5d5ce6f-0743-4322-9742-007836eebbcf)


This fix was mainly luck and trial and error, paired with this tutorial (https://medium.com/@favourphilic/how-to-extract-data-using-api-0fce951e8a79). After this, however, pulling data from the API was mainly just repetition of code and changing the information collected.
 ![85](https://github.com/user-attachments/assets/cd636c49-46b4-4aa8-a4c6-485a6c2fc8e2)


Delving further in, I feel as though some specifics of how the API are laid out are a bit unclear, but after some trial and error, most of the information was retrieved. A hurdle was encountered when trying to load in the image retrieved from a url that in turn was retrieved from the API. After spending an hour on the problem, I believe that the core of the issue was a COR safety measure, and couldn’t be worked around except by downloading each of the random images locally., and then linking that to a variable name/retrieval 
 ![81](https://github.com/user-attachments/assets/3144b7ee-d9c9-4587-b1bc-726296938a63)

I proceeded to do that, and manually made 2 arrays of headshots (male) and headshots (female), with an if statement linked to a variable that drew in gender data from the API. 
 ![90](https://github.com/user-attachments/assets/7707c0a0-15d7-4ccd-8859-0a023ecb0352)

At this point, I realised that the if statement wasn’t working correctly, only showing images from imgF[]. Paired with information pulled from the API, at this point I realised I had unintentionally created a UI that exclusively generated female faces paired with their personal information and location data. Trying to avoid the implications this this poses, I brute forced randomness into the m/f array by combining them, ignoring the tag, and having it randomly choose one regardless of the generated mode of address (mr, mrs, miss), which honestly also worked. 
 ![image](https://github.com/user-attachments/assets/ee75e3f4-b2ca-437f-83a7-f410890c16cc)

##Problems and possible developement 
Aside from the unintentional creation of the stalkertron.5000, applying pixel filters to emulate CRT graphics would have tied this work together nicely. The non functional if/else statement is something that I don't understand, and likely just needs a small syntax fix, which I unfortunately cannot find the time to do.
On the whole, the retrieval and interaction with the API were simple, aside from the complications arising from pulling jpg. files from urls
