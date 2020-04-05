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

To forward reference, pass to `leafletRef`:

```
<Map leafletRef={ref}>
  <TileLayer ... />
</Map>
```

If you do not provide `leafletRef`, wrappers will instead create their own ref and set the property `leafletElement` on the instance when it becomes available, so setting a `ref` prop will still work, however note that since this only occurs late in the render cycle, `leafletElement` may still be undefined when attempting to access it from the `ref`, so it is recommended to check that `ref.leafletElement` exists before attempting to invoke properties or methods on it.

## Troubleshooting custom `react-leaflet` components / render prop support

Some components, such as [react-leaflet-markercluster][markercluster-url], make use of `componentWillMount` and so cannot be used directly.

To mitigate this, you can now use a function [render prop][render-prop-url] instead of normal children for a component. Thus, instead of e.g.

```
<Map>
  <TileLayer ... />
</Map>
```

this will also work

```
<Map>
  () => {
    return <TileLayer ... />
  }
</Map>
```

So in the case of `react-leaflet-markercluster`, you can write something similar to:

```
<Map>
  () => {
    const MarkerClusterGroup = require('react-leaflet-markercluster').default;
    return (
      <div>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup
          markers={[
            { position: [49.8397, 24.0297] },
            { position: [52.2297, 21.0122] },
            { position: [51.5074, -0.0901] },
          ]}
        />
      </div>
    );
  }
 </Map>
```

(contrast with the [example on the react-leaflet-markercluster website][markercluster-example-url])

Note: If you use React 16.2+, [you can also make use of `<Fragment></Fragment>` or simply `<></>`][react-16-fragment-example] instead of the wrapping `<div>` in the example above.

[react-leaflet-url]: https://www.npmjs.com/package/react-leaflet
[markercluster-url]: https://www.npmjs.com/package/react-leaflet-markercluster
[markercluster-example-url]: https://github.com/YUzhva/react-leaflet-markercluster#getting-started
[render-prop-url]: https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce
[react-16-fragment-example]: https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html
