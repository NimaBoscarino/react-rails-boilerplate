import { useEffect, useState } from "react";
import {
  createUser,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
} from "../../apiRequests/backendApi/usersRequests";

// CRUD
// Create
const useCreateUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateUser = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const createdUser = await createUser(data);
      setUser(createdUser);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, handleCreateUser };
};

// Read one
const useUserById = (id) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(id);
        setUser(userData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  return { user, loading, error };
};

// Read all
const useAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getAllUsers();
        setUsers(userData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return { users, loading, error };
};

// Update by Id
const useUpdateUserById = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateUser = async (id, updatedData) => {
    setLoading(true);
    try {
      const userData = await updateUserById(id, updatedData);
      setUser(userData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, updateUser };
};

// Delete by Id
const useDeleteUserById = () => {
  const [deleted, setDeleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteUser = async (id) => {
    setLoading(true);
    try {
      await deleteUserById(id);
      setDeleted(true);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { deleted, loading, error, deleteUser };
};

export {
  useUserById,
  useAllUsers,
  useCreateUser,
  useUpdateUserById,
  useDeleteUserById,
};
