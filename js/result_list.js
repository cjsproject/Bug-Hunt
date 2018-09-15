function handleQuery()
{
	//make sure to set this to the input you're using
	var imagePath = document.getElementById('').value;

	if (imagePath.length === 0)
	{
		alert("Please select an image to upload.");
		document.getElementById('uploadImage').focus();
		return;
	}

	while (responseDiv.childElementCount > 0)
	{
		responseDiv.removeChild(responseDiv.lastChild);
	}

	var f = document.getElementById('uploadImage').files[0];
	sendRequest(f);
}

// Format the request and send it.
function sendRequest(file)
{
	var baseUri = 'https://api.cognitive.microsoft.com/bing/v7.0/images/visualsearch?mkt=${market}&safesearch=${safeSearch}';

	var form = new FormData();
	form.append("image", file);

	var request = new XMLHttpRequest();

	request.open("POST", baseUri);
	request.setRequestHeader('Ocp-Apim-Subscription-Key', '1131d8f4da4641ff930b9a7d4788c570');
	request.addEventListener('load', handleResponse);
	request.send(form);
}

// Handles the response from Bing.
function handleResponse()
{
	if(this.status !== 200)
	{
		alert("Error calling Bing Visual Search. See console log for details.");
		console.log(this.responseText);
		return;
	}

	var tags = parseResponse(JSON.parse(this.responseText));

	for (var tag in tags)
	{
		if (tags.hasOwnProperty(tag))
		{
			helper(tag, tags[tag]);
    }
	}
}

// Parses the json response by tags.
function parseResponse(json)
{
	var dict = {};

	for (var i = 0; i < json.tags.length; i++)
	{
		var tag = json.tags[i];

		if (tag.displayName === '')
		{
			dict['Default'] = JSON.stringify(tag);
		}

		else
		{
			dict[tag.displayName] = JSON.stringify(tag);
		}
	}

	return(dict);
}

// Adds the tag's action types to the div.
function helper(tag, json)
{
	var parsedJson = JSON.parse(json);

  // Loop through all the actions in the tag and display them.
	for (var j = 0; j < parsedJson.actions.length; j++)
	{
		var action = parsedJson.actions[j];

        if (action.actionType === 'RelatedSearches')
		{
			addRelatedImagesSites(action.data.value);
		}
	}
}

function addRelatedImagesSites(json)
{
	var parsedJson = JSON.parse(json);
	var length = (images.length > 100) ? 100 : images.length;
	var links = [];

	for (var i = 0; i < length; i++)
	{
		links[i] = images[j].hostPageDisplayUrl;
	}

	var request = $.ajax({
	  url: "", //this is the server address
	  method: "POST",
	  data: { id : links },
	  dataType: "application/json"
});
}
