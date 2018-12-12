
//takes a string of song lyrics, returns the most important word or phrase in the song
function lyricsToSearchString(filename) {
        lyricData = nlp(filename)
        topics = lyricData.topics().slice(0, 50).out('frequency')
        verbPhrases = lyricData.verbs().slice(0, 50).out('frequency')
        return verbPhrases[0] + " " + topics[0]
}

//get a youtube url from a search string
function getYoutubeURL(searchString) {
        searchURL = ("https://www.youtube.com/results?sp=EgQQARgB&search_query=" + searchString).replace(" ", "+")
        //"videoId":"YQHsXMglC9A"
        console.log("creating request");

        $.get( searchURL, function(data) {
                startIndex = data.indexOf("videoId") + 4
                videoId = ""
                while(data.charAt(startIndex) != '"') {
                        videoId += data.charAt(startIndex)
                }
                console.log("here")
                console.log(videoId)
        });

}




$(function() {
    getYoutubeURL("hello face")
});
