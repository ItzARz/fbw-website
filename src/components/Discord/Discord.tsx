import Image from 'next/image';
import Button from '../Button/Button';

const Discord = () => (
    <div className="grid gap-y-2">
        <span className="flex justify-center gap-x-5 lg:justify-start">
            <Image src="/svg/discord.svg" layout="intrinsic" width={40} height={40} />
            <h3 className="text-discord">Discord</h3>
        </span>
        <p>Join us to chat with other members of the community, get started with contributing, or ask us a question!</p>

        <a
            href="https://discord.gg/flybywire"
            target="_blank"
            rel="noreferrer"
        >
            <Button label="Join Community!" theme="discord" />
        </a>
    </div>
);

export default Discord;