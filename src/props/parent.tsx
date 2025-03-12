import { ChildAsFC } from './child';

const Parent = () => {
    return <ChildAsFC color='pink' onClick={() => console.log('Clicked')}>
        My name is Michelle
    </ChildAsFC>
}

export default Parent;