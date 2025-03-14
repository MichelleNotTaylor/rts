import { useState, useRef, useEffect } from 'react';

const users = [
    { name: 'Michelle', age: 30 },
    { name: 'Ilana', age: 4 },
    { name: 'Freddy', age: 2 },
    { name: 'Daphne', age: 2 }
]

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number} | undefined>();

    useEffect(() => {
        if(!inputRef.current) {
            return;
        }
        inputRef.current?.focus()
    }, []);

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    };

    return <div>
        User Search
        <input 
            ref={inputRef} 
            value={name} 
            onChange={e => setName(e.target.value)} 
            />
        <button onClick={onClick}>Find User</button>
        <div>
            { user && user.name }
            { user && user.age }
        </div>
    </div>
}

export default UserSearch;