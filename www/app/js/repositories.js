'use strict';

/* Repositories */

/* Remote Connection */

function RemoteConnectionRepository() {

    this.DataAccessLayer = new LocalStorage();

    this.SaveRemoteConnection = function(remoteConnection)
    {
        this.DataAccessLayer.Save(remoteConnection);
    };

    this.GetRemoteConnection = function()
    {
        return this.DataAccessLayer.Load();
    };
}

