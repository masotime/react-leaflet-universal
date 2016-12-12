# react-leaflet-universal

Thin wrapper around [react-leaflet][react-leaflet-url] that is designed to make it easier to implement the module in universal applications. Leaflet was not designed with the server in mind, making it very difficult to work with for server-side rendering.

To sidestep this issue, we simply don't render server side. This module wraps all of `react-leaflet`'s components in a Wrapper class that only renders when the component is mounted - which only happens client-side.

## usage

Just use it as you normally would use `react-leaflet`. e.g. Instead of

```
import { Map } from 'react-leaflet';
```

write
```
import { Map } from 'react-leaflet-universal';
```

[react-leaflet-url]: https://www.npmjs.com/package/react-leaflet