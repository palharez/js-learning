import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useReducer,
  useContext,
} from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<[User]>();

  const names = useMemo(() => users?.map(user => user.name).join(', '), [users]);

  const greeting = useCallback(
    (user: User) => alert(`Helo ${user.name}`),
    []
  );

  const inputRef = useRef<HTMLInputElement>(null);

  inputRef.current?.focus();

  return (
    <div>
      <form>
        <input type="text" ref={inputRef} />
      </form>
    </div>
  );
}

export default App;
