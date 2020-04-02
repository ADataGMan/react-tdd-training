const localContext = require.context('.', true, /Spec\.js$/);
localContext.keys().forEach(localContext);
