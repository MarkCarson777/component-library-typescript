# Button Component Documentation

The Button component is a reusable React component that generates a customizable button element. It supports various button variants, sizes, and states such as disabled and pending.

## Usage

To use the Button component, import it and render it with the desired props:

        import { Button } from 'path/to/Button';

        function MyComponent() {
          return (
            <Button
              primary
              size="m"
              onClick={() => {
                // Handle button click
              }}
            >
              Click me
            </Button>
          );
        }

## Props

The Button component accepts the following props:

**primary** (boolean, optional): Determines if the button should have a primary variant. When set to true, the button will have a blue background color.

**secondary** (boolean, optional): Determines if the button should have a secondary variant. When set to true, the button will have a gray background color.

**success** (boolean, optional): Determines if the button should have a success variant. When set to true, the button will have a green background color.

**warning** (boolean, optional): Determines if the button should have a warning variant. When set to true, the button will have a yellow background color.

**danger** (boolean, optional): Determines if the button should have a danger variant. When set to true, the button will have a red background color.

**size** (string, required): Specifies the size of the button. Valid values are:

"xs": Extra small size.\
"s": Small size.\
"m": Medium size.\
"l": Large size.\
"xl": Extra large size.\
"auto": Automatically adjusts the size based on the content.\

**onClick** (function, required): Event handler function to be called when the button is clicked.
pending (boolean, optional): Determines if the button is in a pending state. When set to true, a loader component will be displayed inside the button.

**disabled** (boolean, optional): Determines if the button is disabled. When set to true, the button will be non-interactive and have reduced opacity.

**className** (string, optional): Additional CSS classes to be applied to the button element.

**style** (object, optional): Additional inline styles to be applied to the button element.
In addition to these props, any other valid HTML button attributes can be passed to the Button component.

## Styling

The Button component uses CSS modules for styling. The following CSS classes are available:

xs: Applies styles specific to the extra small button size.\
sm: Applies styles specific to the small button size.\
med: Applies styles specific to the medium button size.\
lg: Applies styles specific to the large button size.\
xlg: Applies styles specific to the extra large button size.\
auto: Applies styles specific to the automatically sized button.\

To apply custom styles, you can pass a className prop with the desired CSS classes.

## Example

Here's an example that showcases different variants, sizes, and states of the Button component:

        import { Button } from 'path/to/Button';

        function MyComponent() {
          return (
            <div>
              <Button primary size="m" onClick={() => {}}>
                Primary Button
              </Button>
              <Button secondary size="s" onClick={() => {}}>
                Secondary Button
              </Button>
              <Button success size="l" onClick={() => {}}>
                Success Button
              </Button>
            </div>
          )
        }
