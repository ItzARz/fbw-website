import Image from 'next/image';
import Link from 'next/link';
import { DownloadOutlined } from '@ant-design/icons';
import Container from '../Utils/Container';
import Tag from '../Utils/Tag';
import Button from '../Button/Button';

type CardProps = {
    title: string,
    description: string,
    category: any,
    metaImage?: string,
    metaAlt?: string,
    href: string,
    downloadURL?: string,
    direction: 'horizontal' | 'vertical',
}

const Card = ({
    metaAlt,
    metaImage,
    title,
    description,
    category,
    href,
    downloadURL,
    direction,
}: CardProps) => (
    <div className="border-2 border-transparent hover:border-primary rounded-md overflow-hidden">
        <div className="grid bg-secondary-accent-dark">
            {metaImage && <Image src={metaImage} alt={metaAlt} width={800} height={350} objectFit="cover" /> }
            <div className="grid relative">
                <Container className="grid gap-2 px-12 py-8">
                    <Tag className={`${direction === 'horizontal' && 'absolute top-8 right-8'}`} category={category} />
                    <h3 className={`${direction === 'vertical' && 'text-6xl'}`}>{title}</h3>
                    <p>
                        {description}
                    </p>
                    <span className="flex flex-wrap gap-2 py-4">
                    <Link href={href}>
                        <Button label="Learn More" theme="secondary" />
                    </Link>
                        {downloadURL
                            && (
                                <>
                                    <a href={downloadURL}>
                                        <Button label={<DownloadOutlined />} theme="primary" className="flex max-w-min items-center justify-center" />
                                    </a>
                                </>
                            )}
                </span>
                </Container>
            </div>
        </div>
    </div>
);

export default Card;