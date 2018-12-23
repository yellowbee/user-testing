const app = getApp()

Page({
    // fired when top-left back button is clicked
    onUnload: function () {
        // swtichTab() goes back to tabbar page and closes
        // all non-tabbar pages
        wx.switchTab({
            url: "/pages/index/index"
        })
    }
});
