// Avoid Duplicate Serialization in RSC Props
// ❌ Wrong: This approach has performance issues

// RSC: sends 6 strings (2 arrays × 3 items)
<ClientList usernames={usernames} usernamesOrdered={usernames.toSorted()} />;
