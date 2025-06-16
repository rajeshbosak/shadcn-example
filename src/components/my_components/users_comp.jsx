import React, { useEffect, useState } from "react";
import axios from "axios";

import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";

const UsersComp = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        console.log("response.data : ", response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Users</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-48 w-full rounded-xl" />
              ))
            : users.map((user) => (
                <Card
                  key={user.id}
                  className="shadow-lg hover:scale-105 transition-transform duration-200"
                >
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{user.name}</CardTitle>
                      <span className="text-sm text-muted-foreground">
                        @{user.username}
                      </span>
                    </div>
                    <div className="ml-auto">
                      <Badge
                        variant={user.isActive ? "success" : "destructive"}
                      >
                        {user.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm">
                        <strong>Email:</strong> {user.email}
                      </span>
                      <span className="text-sm">
                        <strong>Phone:</strong> {user.phone}
                      </span>
                      <span className="text-sm">
                        <strong>Age:</strong> {user.age}
                      </span>
                      <span className="text-sm">
                        <strong>Gender:</strong> {user.gender}
                      </span>
                      <span className="text-sm">
                        <strong>Address:</strong> {user.address}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Joined: {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </>
  );
};

export default UsersComp;
