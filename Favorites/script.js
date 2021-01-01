function newSite() {

    let siteName = document.getElementById('site-name').value;
    let siteUrl = document.getElementById('url').value;

    let bookmarks = {
        name: siteName,
        url: siteUrl
    };

    if (siteName === "" || siteUrl === "") {
        alert("Enter site Name and URL!");
    } else {

        let li = document.createElement('li');

        let txtName = document.createTextNode(bookmarks.name);

        let dellBtn = document.createElement('button');
        dellBtn.innerHTML = ' <a onclick = "deleteSite(\'' + url + '\')" class = btn btn-danger>Delete</a>'

        let visitBtn = document.createElement('button');
        visitBtn.innerHTML = ' <a target="_blank" onclick = "' + url + '">Visit</a>'

        let span = document.createElement('span');
        span.append(visitBtn);
        span.append(dellBtn);
        li.append(txtName);
        li.append(span);
        document.getElementById('sites').append(li);

        if (localStorage.getItem("saves") === null) {
            let saves = [];
            saves.push(bookmarks);
            localStorage.setItem('saves', JSON.stringify(saves));
        } else {
            let saves = JSON.parse(localStorage.getItem('saves'));
            saves.push(bookmarks);
            localStorage.setItem('saves', JSON.stringify(saves));
        }

        document.getElementById('site-name').value = "";
        document.getElementById('url').value = "";

    }
    // loadSites()
}

function deleteSite(url) {

    let saves = JSON.parse(localStorage.getItem('saves'));
    for (let i = 0; i < saves.length; i++) {
        if (saves[i].url === url) {
            saves.splice(i, 1);
        }
    }
    localStorage.setItem('saves', JSON.stringify(saves));

    // loadSites()
}

function loadSites() {

    let saves = JSON.parse(localStorage.getItem('saves'));

    for (let i = 0; i < saves.length; i++) {

        let _name = saves[i].name;
        let _url = saves[i].url;

        let li = document.createElement('li');

        let txtName = document.createTextNode(_name);

        let dellBtn = document.createElement('button');
        dellBtn.innerHTML = '<a onclick = "deleteSite(\'' + _url + '\')" class = btn btn-danger>Delete</a>'

        let visitBtn = document.createElement('button');
        visitBtn.innerHTML = '<a href = "' + _url + '">Visit</a>'

        let span = document.createElement('span');
        span.append(visitBtn);
        span.append(dellBtn);
        li.append(txtName);
        li.append(span);
        document.getElementById('sites').append(li);

    }
}
