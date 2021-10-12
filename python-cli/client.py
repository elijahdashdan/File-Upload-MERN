import click
import requests
import mimetypes
import os
api_url = "http://localhost:8080/api/"

@click.group()
def main():
    """
    Simple CLI for querying APIs at http://localhost:8080/api/
    """
    pass

@main.command()
def getfiles():
    """This search and return all file lists through API requests"""
    response = requests.get(api_url + "getFiles")

    if (response.status_code) == 200:

        print("No.", "| File-Name | ", "File-Path")
        x = 1
        for files in response.json():
            print("["+str(x)+"]",files["fileName"],files["filePath"])
            x+=1
    elif (response.status_code) == 400:
        click.echo("Cannot Get List of Files")

@main.command()
@click.argument('filepath')
def upload(filepath):
    """This allows user to upload a file"""

    fileAbsPath = os.path.abspath(filepath)
    fileName = os.path.basename(filepath)
    fileType = mimetypes.MimeTypes().guess_type(filepath)[0]
    headers = {}
    payload={}
    files=[
      ('file',(fileName,open(fileAbsPath,'rb'),fileType))
    ]
    response = requests.post(api_url + "uploadFile", headers=headers, data=payload, files=files)


@main.command()
@click.argument('filename')
def delete(filename):
    """This allows user to delete a file"""
    response = requests.get(api_url + "getFiles")
    id = ""
    for files in response.json():
        if files["fileName"] == filename:
            id = files["_id"]
    response = requests.delete(api_url + "deleteFile/" + id)

    if (response.status_code) == 200:
        click.echo(filename + " Successfully Deleted")
    elif (response.status_code) == 404:
        click.echo("Error deleting ["+filename)

if __name__ == "__main__":
    main()