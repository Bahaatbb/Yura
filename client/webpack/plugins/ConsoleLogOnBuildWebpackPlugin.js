const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('\n\n\nBuild starts now!\n\n\n');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;