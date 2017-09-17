# meiji-japan

# Configuration
Modified the index.html and configure all values, see a example below:

<!-- EDIT THIS SECTION TO INCLUDE YOUR EXHIBITION DETAILS -->
    <div ng-hide="listHide" class="ng-hide" id="background-image1" class="page-header">img/HS_1.jpg</div>
    <div ng-hide="listHide" class="ng-hide" id="background-image2" class="page-header">img/HS_2.jpg</div>
    <div ng-hide="listHide" class="ng-hide" id="background-image3" class="page-header">img/HS_3.jpg</div>

      <!-- Exhibition highlights -->
    <div ng-hide="listHide" class="ng-hide" id="highlights-image1">img/high_1.jpg</div>
    <div ng-hide="listHide" class="ng-hide" id="highlights-caption1">Caption 1</div>

    <div ng-hide="listHide" class="ng-hide" id="highlights-image2">img/high_2.jpg</div>
    <div ng-hide="listHide" class="ng-hide" id="highlights-caption2"> Caption 2</div>

    <div ng-hide="listHide" class="ng-hide" id="highlights-image3">img/high_3.jpg</div>
    <div ng-hide="listHide" class="ng-hide" id="highlights-caption3"> Caption 3</div>

    <div ng-hide="listHide" class="ng-hide" id="highlights-image4">img/high_4.jpg</div>
    <div ng-hide="listHide" class="ng-hide" id="highlights-caption4"> Caption 4</div>

    <div ng-hide="listHide" class="ng-hide" id="highlights-image5">img/high_5.jpg</div>
    <div ng-hide="listHide" class="ng-hide" id="highlights-caption5"> Caption 5</div>

    <div ng-hide="listHide" class="ng-hide" id="highlights-image6">img/high_6.jpg</div>
    <div ng-hide="listHide" class="ng-hide" id="highlights-caption6"> Caption 6</div>

    <div ng-hide="listHide" class="ng-hide" id="highlights-image7">img/high_7.jpg</div>
    <div ng-hide="listHide" class="ng-hide" id="highlights-caption7"> Caption 7</div>

    <h1 ng-hide="listHide" class="ng-hide" id="exhibition-name" class="page-header">Meiji Japan</h1>
    <h2 ng-hide="listHide" class="ng-hide" id="exhibition-tagline"></h2>
    <div ng-hide="listHide" class="ng-hide" id="exhibition-description">
        Step into the tumultuous world of Meiji Japan (1868–1912), through a selection of stunning Japanese woodblock illustrations. Used to illustrate Japanese novels, these beautiful images, known as kuchi-e (literally, ‘mouth/opening picture’), accompany stories filled with drama, tragedy and intrigue, reflecting the uncertainty of the times. Curated by Dr. Gary Hickey, the exhibition draws upon a substantial collection of kuchi-e amassed by University of NSW Emeritus Professor Richard Clough (1921-2014) and donated to the Library. This collection, along with other works acquired, forms one of the most significant collections of this genre in the world and the largest focused collection of Japanese art in Australia. The exhibition features over twenty artists and a range of subjects, illustrating a fascinating history of a genre profiled for the first time in a major exhibition.
    </div>
    <div ng-hide="listHide" class="ng-hide" id="exhibition-highlights">
      EXHIBITION HIGHLIGHTS
    </div>
    <div ng-hide="listHide" class="ng-hide" id="exhibition-footer">
      <h1>Visit the Exhibition</h1>
      <h2><a href="http://45.76.118.247:9000">Melodrama in Meiji Japan</a></h2>
      <p>National Library Australia, Canberra</p>
      <p>24th May to 27th August 2017</p>
    </div>

    <ul ng-hide="listHide" class="ng-hide" id="lists">
      <!-- CHANGE THIS TO LIST THE TROVE LISTS THAT MAKE UP YOUR EXHIBITION -->
        <li><a class="list-link" href="http://trove.nla.gov.au/list?id=102074">Historical Stories</a></li>
        <li><a class="list-link" href="http://trove.nla.gov.au/list?id=102076">Contemporary Life</a></li>
        <li><a class="list-link" href="http://trove.nla.gov.au/list?id=102083">Seasons & Festivals</a></li>
        <li><a class="list-link" href="http://trove.nla.gov.au/list?id=102086">Beautiful Women</a></li>
        <li><a class="list-link" href="http://trove.nla.gov.au/list?id=102089">Dramatic Stories</a></li>
        <li><a class="list-link" href="http://trove.nla.gov.au/list?id=102090">Love & Romance</a></li>
    </ul>
    <script>
      // ADD YOUR TROVE API KEY
      var troveAPIKey = "YOUR TROVE KEY";
      var troveApiUrl="http://api.trove.nla.gov.au";
      //var troveApiUrl="https://trove-proxy.herokuapp.com/api";
      var config = {};
      config.listSnippet = 50;
      config.directLinks = true;
      config.showGrid = true;
    </script>
  <!-- END OF YOUR DETAILS -->    
    


# HOW TO RUN

Run following command in this project root folder

python -m SimpleHTTPServer 

Launch url like http://localhost:8000
