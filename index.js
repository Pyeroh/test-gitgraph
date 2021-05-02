const graphContainer = document.getElementById("graph-container");

const options = {
  template: GitgraphJS.templateExtend("metro", {
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false
      }
    }
  })
};

function createStyle(color) {
  return {
    style: {
      color: color,
      dot: {
        color: color
      },
      message: {
        color: "transparent"
      },
      label: {
        color: color,
        strokeColor: color
      }
    }
  };
}

function emptyCommit(color) {
  return {
    subject: " _",
    ...createStyle(color)
  };
}

const gitgraph = GitgraphJS.createGitgraph(graphContainer, options);

const master = gitgraph.branch("master");
master.commit("").commit("");

const feature1 = master.branch({ name: "feature/1", ...createStyle("red") });
feature1.commit(emptyCommit("red"));

const orangeStyle = createStyle("#f1c109");
const feature2 = master.branch({
  name: "feature/2",
  ...createStyle("#f1c109")
});
feature2.commit(emptyCommit("#f1c109"));

const purpleStyle = createStyle("purple");
const feature3 = master.branch({ name: "feature/3", ...createStyle("purple") });
feature3.commit(emptyCommit("purple"));

master
  .merge(feature1)
  .merge(feature2)
  .merge(feature3);
