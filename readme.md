# GSX2JSON - Google Spreadsheet to JSON API service.

## About

One useful feature of Google Spreadsheets is the ability to access the data as JSON by using a particular feed URL. However, this is a bit fiddly to do, and the resulting JSON is pretty unreadable, with usable data buried deep inside objects.

This API connects to your spreadsheet and santizes the data, providing simple, readable JSON for you to use in your app.

## Install

- Get [Google API key](https://developers.google.com/sheets/api/guides/authorizing#APIKey) and add to api.js (line 1).
- You must also enable the Google Sheets API and set up a service account.
- Make sure your Google Sheet is set to be shared to 'anyone with the link'.
- Run `npm install`.
- Run `node app`.

## Usage

First, you must make sure your Google Sheet is set to be shared to 'anyone with the link'. 

You can then access your readable JSON API using the `/api` endpoint. You can change this in app.js.

```
http://example.com/api?id=SPREADSHEET_ID&sheet=SHEET_NAME
```

This will update live with changes to the spreadsheet.

### Parameters

**api_key (required):** The API key set up in your Google developer account. You must also enable the Google Sheets API and set up a service account.

**id (required):** The ID of your document. This is the big long aplha-numeric code in the middle of your document URL.

**sheet (required):** The name of the individual sheet you want to get data from. 

**q (optional):** A simple query string. This is case insensitive and will add any row containing the string in any cell to the filtered result.

**integers (optional - default: true)**: Setting 'integers' to false will return numbers as a string.

**rows (optional - default: true)**: Setting 'rows' to false will return only column data.

**columns (optional - default: true)**: Setting 'columns' to false will return only row data.

## Example Response

There are two sections to the returned data - Columns (containing the names of each column), and Rows (containing each row of data as an object.

```
{
	columns: [
		"Name",
		"Age"
	],
	rows: [
		{
		name: "Nick",
		age: "21"
		},
		{
		name: "Chris ",
		age: "27"
		},
		{
		name: "Barry",
		age: "67"
		}
	]
}

```
