import { FC, Fragment, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Next, documentToHtmlString, Options } from '@contentful/rich-text-html-renderer';
import { BLOCKS, NodeData, Document } from '@contentful/rich-text-types';
import { registerUniformComponent, ComponentProps, UniformText } from '@uniformdev/canvas-next-rsc';
import { getTextClass } from '@/utils/styling';
import Link from 'next/link';

const documentToHtmlStringOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: NodeData, next: Next) => `<p class="pb-10 text-lg">${next(node.content)}</p>`,
    [BLOCKS.HEADING_2]: (node: NodeData, next: Next) => `<h2 class="pb-2.5 text-2xl">${next(node.content)}</h2>`,
    [BLOCKS.EMBEDDED_ASSET]: (node: NodeData) =>
      `<div class="pb-12 lg:pb-16 max-w-4xl">
            <img src="${node.data.target.fields.file.url}" 
                    height="${node.data.target.fields.file.details.image.height}"
                    width="${node.data.target.fields.file.details.image.width}" alt="${node.data.target.fields.description}"/>
          </div>`,
  },
};

export type Props = ComponentProps<{
  title?: string;
  titleStyle: Types.HeadingStyles;
  link?: Types.ProjectMapLink;
  text: string;
  contentfulContent?: Document;
}>;

const ContentBlock: FC<Props> = ({ titleStyle: TitleTag = 'h1', contentfulContent, link, component }) => {
  const Wrapper = link?.path
    ? ({ children }: PropsWithChildren) => {
      return <Link href={link?.path}>{children}</Link>;
    }
    : Fragment;

  return (
    <div
      className={'text-secondary-content items-center justify-between w-full gap-5 mx-auto lg:flex-nowrap rounded-xl'}
    >
      <Wrapper>
        <UniformText
          placeholder="Title goes here"
          parameterId="title"
          as={TitleTag}
          className={classNames('font-medium', getTextClass(TitleTag))}
          component={component}
        />
      </Wrapper>
      {contentfulContent ? (
        <div
          className="py-6 text-xl"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(contentfulContent, documentToHtmlStringOptions),
          }}
        />
      ) : (
        <UniformText
          placeholder="Text goes here"
          parameterId="text"
          as={TitleTag}
          className="py-6 text-xl"
          component={component}
        />
      )}
    </div>
  );
};

registerUniformComponent({
  type: 'content',
  component: ContentBlock,
});

export default ContentBlock;
