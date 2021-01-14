// 我的常用
linkMine = {
  init: function() {
      var that = this;
      //这里设置的是 json 文件路径
      $.getJSON("/stars/mine.json",
      function(data) {
          that.render(data);
      });
  },
  render: function(data) {
      var nickname, site, li = "";
      for (var i = 0; i < data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')" >' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(".mine").append(li);
  }
}
linkMine.init();
// 官方文档
linkDocs = {
  init: function() {
      var that = this;
      //这里设置的是 json 文件路径
      $.getJSON("/stars/docs.json",
      function(data) {
          that.render(data);
      });
  },
  render: function(data) {
      var nickname, site, li = "";
      for (var i = 0; i < data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')" >' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(".docs").append(li);
  }
}
linkDocs.init();

// 代码托管
linkCode = {
  init: function() {
      var that = this;
      //这里设置的是 json 文件路径
      $.getJSON("/stars/code.json",
      function(data) {
          that.render(data);
      });
  },
  render: function(data) {
      var nickname, site, li = "";
      for (var i = 0; i < data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')" >' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(".code").append(li);
  }
}
linkCode.init();

// 技能训练
linkSkill = {
  init: function() {
      var that = this;
      //这里设置的是 json 文件路径
      $.getJSON("/stars/skill.json",
      function(data) {
          that.render(data);
      });
  },
  render: function(data) {
      var nickname, site, li = "";
      for (var i = 0; i < data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')" >' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(".skill").append(li);
  }
}
linkSkill.init();

// 学习平台
linkSchool = {
  init: function() {
      var that = this;
      //这里设置的是 json 文件路径
      $.getJSON("/stars/school.json",
      function(data) {
          that.render(data);
      });
  },
  render: function(data) {
      var nickname, site, li = "";
      for (var i = 0; i < data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')" >' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(".school").append(li);
  }
}
linkSchool.init();

// 开发者社区
linkCommunity = {
  init: function() {
      var that = this;
      //这里设置的是 json 文件路径
      $.getJSON("/stars/community.json",
      function(data) {
          that.render(data);
      });
  },
  render: function(data) {
      var nickname, site, li = "";
      for (var i = 0; i < data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')" >' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(".community").append(li);
  }
}
linkCommunity.init();

// 云服务
linkServe = {
  init: function() {
      var that = this;
      //这里设置的是 json 文件路径
      $.getJSON("/stars/serve.json",
      function(data) {
          that.render(data);
      });
  },
  render: function(data) {
      var nickname, site, li = "";
      for (var i = 0; i < data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')" >' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(".serve").append(li);
  }
}
linkServe.init();

// 站长工具
linkSiteTool = {
  init: function() {
      var that = this;
      //这里设置的是 json 文件路径
      $.getJSON("/stars/sitetool.json",
      function(data) {
          that.render(data);
      });
  },
  render: function(data) {
      var nickname, site, li = "";
      for (var i = 0; i < data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')" >' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(".sitetool").append(li);
  }
}
linkSiteTool.init();

// 设计素材
linkDesign = {
  init: function() {
      var that = this;
      //这里设置的是 json 文件路径
      $.getJSON("/stars/design.json",
      function(data) {
          that.render(data);
      });
  },
  render: function(data) {
      var nickname, site, li = "";
      for (var i = 0; i < data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')" >' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(".design").append(li);
  }
}
linkDesign.init();

// 实用工具
linkTools = {
  init: function() {
      var that = this;
      //这里设置的是 json 文件路径
      $.getJSON("/stars/tools.json",
      function(data) {
          that.render(data);
      });
  },
  render: function(data) {
      var nickname, site, li = "";
      for (var i = 0; i < data.length; i++) {
          nickname = data[i].nickname;
          site = data[i].site;
          content = data[i].content;
          li += '<div class="card" onclick="window.open(\'' + site +'\')" >' + '<div class="card-header">' + '<div>' + nickname + '</div>' + '</div>' + '<div class="card-content">' + '<div>' + content + '</div>' + '</div>' + '</div>';
      }
        $(".tools").append(li);
  }
}
linkTools.init();
