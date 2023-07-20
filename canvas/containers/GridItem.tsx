import { FC } from 'react';
import classNames from 'classnames';
import { UniformSlot, ComponentProps, registerUniformComponent } from '@uniformdev/canvas-next-rsc';

export type Props = ComponentProps<{
  columnSpan?: Types.AvailableColumnCount;
  columnStart?: Types.AvailableColumnCount;
  rowSpan?: Types.AvailableRowCount;
  rowStart?: Types.AvailableRowCount;
}>;

const getGridColumnsSpanClass = (colSpan?: Types.AvailableColumnCount) => {
  switch (colSpan) {
    case '1':
      return 'col-span-1';
    case '2':
      return 'col-span-2';
    case '3':
      return 'col-span-3';
    case '4':
      return 'col-span-4';
    case '5':
      return 'col-span-5';
    case '6':
      return 'col-span-6';
    case '7':
      return 'col-span-7';
    case '8':
      return 'col-span-8';
    case '9':
      return 'col-span-9';
    case '10':
      return 'col-span-10';
    case '11':
      return 'col-span-11';
    case '12':
      return 'col-span-12';
    default:
      return '';
  }
};

const getGridColumnsStartClass = (colSpan?: Types.AvailableColumnCount) => {
  switch (colSpan) {
    case '1':
      return 'col-start-1';
    case '2':
      return 'col-start-2';
    case '3':
      return 'col-start-3';
    case '4':
      return 'col-start-4';
    case '5':
      return 'col-start-5';
    case '6':
      return 'col-start-6';
    case '7':
      return 'col-start-7';
    case '8':
      return 'col-start-8';
    case '9':
      return 'col-start-9';
    case '10':
      return 'col-start-10';
    case '11':
      return 'col-start-11';
    case '12':
      return 'col-start-12';
    default:
      return '';
  }
};

const getGridRowsSpanClass = (rowSpan?: Types.AvailableRowCount) => {
  switch (rowSpan) {
    case '1':
      return 'row-span-1';
    case '2':
      return 'row-span-2';
    case '3':
      return 'row-span-3';
    case '4':
      return 'row-span-4';
    case '5':
      return 'row-span-5';
    case '6':
      return 'row-span-6';
    default:
      return '';
  }
};

const getGridRowsStartClass = (rowStart?: Types.AvailableRowCount) => {
  switch (rowStart) {
    case '1':
      return 'row-start-1';
    case '2':
      return 'row-start-2';
    case '3':
      return 'row-start-3';
    case '4':
      return 'row-start-4';
    case '5':
      return 'row-start-5';
    case '6':
      return 'row-start-6';
    default:
      return '';
  }
};

const GridItem: FC<Props> = ({ columnStart, columnSpan, rowSpan, rowStart, component, context }) => (
  <div
    className={classNames(
      getGridColumnsStartClass(columnStart),
      getGridColumnsSpanClass(columnSpan),
      getGridRowsStartClass(rowStart),
      getGridRowsSpanClass(rowSpan)
    )}
  >
    <UniformSlot
      name="inner"
      data={component}
      context={context}
    />
  </div>
);

registerUniformComponent({
  type: 'gridItem',
  component: GridItem,
});

export default GridItem;
