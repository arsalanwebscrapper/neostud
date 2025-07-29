import { useState } from "react";
import { Mail, Search, Reply, Archive, Trash2, MoreVertical } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Textarea } from "../../components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";

interface Message {
  id: number;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  date: string;
  status: 'unread' | 'read' | 'replied' | 'archived';
  priority: 'low' | 'medium' | 'high';
}

export const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "John Smith",
      email: "john@techcorp.com",
      company: "TechCorp Inc",
      subject: "Website Redesign Project",
      message: "Hi, I'm interested in discussing a complete website redesign for our company. We're looking for a modern, responsive design that reflects our brand values. Could we schedule a consultation?",
      date: "2024-01-15T10:30:00Z",
      status: 'unread',
      priority: 'high'
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@startup.io",
      company: "StartupIO",
      subject: "SEO Services Inquiry",
      message: "We're a growing startup and need help with our SEO strategy. Our current organic traffic is quite low and we'd like to improve our search rankings.",
      date: "2024-01-14T14:20:00Z",
      status: 'read',
      priority: 'medium'
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike@ecommerce.com",
      subject: "E-commerce Platform Development",
      message: "Looking for a team to build a custom e-commerce platform with advanced features like inventory management, multi-vendor support, and analytics dashboard.",
      date: "2024-01-13T09:15:00Z",
      status: 'replied',
      priority: 'high'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyText, setReplyText] = useState("");
  const [showReplyDialog, setShowReplyDialog] = useState(false);

  const filteredMessages = messages.filter(message => {
    const matchesSearch = 
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || message.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const updateMessageStatus = (id: number, status: Message['status']) => {
    setMessages(prev => prev.map(msg => 
      msg.id === id ? { ...msg, status } : msg
    ));
  };

  const deleteMessage = (id: number) => {
    if (confirm("Are you sure you want to delete this message?")) {
      setMessages(prev => prev.filter(msg => msg.id !== id));
    }
  };

  const handleReply = (message: Message) => {
    setSelectedMessage(message);
    setShowReplyDialog(true);
    if (message.status === 'unread') {
      updateMessageStatus(message.id, 'read');
    }
  };

  const sendReply = () => {
    if (selectedMessage && replyText.trim()) {
      updateMessageStatus(selectedMessage.id, 'replied');
      setReplyText("");
      setShowReplyDialog(false);
      setSelectedMessage(null);
      // Here you would typically send the email
    }
  };

  const getStatusColor = (status: Message['status']) => {
    switch (status) {
      case 'unread': return 'bg-blue-500';
      case 'read': return 'bg-yellow-500';
      case 'replied': return 'bg-green-500';
      case 'archived': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: Message['priority']) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Messages</h1>
          <p className="text-muted-foreground">Manage client inquiries and communications</p>
        </div>
        
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Badge variant="outline">
            {filteredMessages.filter(m => m.status === 'unread').length} Unread
          </Badge>
          <Badge variant="outline">
            {filteredMessages.length} Total
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <Card className="glass-effect p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex space-x-2">
            {['all', 'unread', 'read', 'replied', 'archived'].map(status => (
              <Button
                key={status}
                variant={selectedStatus === status ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedStatus(status)}
                className="capitalize"
              >
                {status}
              </Button>
            ))}
          </div>
        </div>
      </Card>

      {/* Messages List */}
      <div className="space-y-4">
        {filteredMessages.map((message) => (
          <Card 
            key={message.id} 
            className={`glass-effect p-6 hover-lift border-l-4 ${getPriorityColor(message.priority)} ${
              message.status === 'unread' ? 'bg-accent/5' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {/* Header */}
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(message.status)}`} />
                  <h3 className="font-semibold">{message.name}</h3>
                  <span className="text-sm text-muted-foreground">{message.email}</span>
                  {message.company && (
                    <Badge variant="outline" className="text-xs">
                      {message.company}
                    </Badge>
                  )}
                  <Badge variant="outline" className={`text-xs capitalize ${
                    message.priority === 'high' ? 'text-red-500' :
                    message.priority === 'medium' ? 'text-yellow-500' : 'text-green-500'
                  }`}>
                    {message.priority}
                  </Badge>
                </div>

                {/* Subject */}
                <h4 className="text-lg font-medium mb-2">{message.subject}</h4>

                {/* Message Preview */}
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {message.message}
                </p>

                {/* Date */}
                <p className="text-sm text-muted-foreground">
                  {formatDate(message.date)}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  onClick={() => handleReply(message)}
                  className="bg-gradient-accent hover:shadow-glow"
                >
                  <Reply className="w-4 h-4 mr-1" />
                  Reply
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="outline">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="glass-effect">
                    <DropdownMenuItem onClick={() => updateMessageStatus(message.id, 'read')}>
                      <Mail className="w-4 h-4 mr-2" />
                      Mark as Read
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateMessageStatus(message.id, 'archived')}>
                      <Archive className="w-4 h-4 mr-2" />
                      Archive
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => deleteMessage(message.id)}
                      className="text-red-500"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredMessages.length === 0 && (
        <Card className="glass-effect p-12 text-center">
          <div className="text-muted-foreground">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No messages found matching your criteria.</p>
          </div>
        </Card>
      )}

      {/* Reply Dialog */}
      <Dialog open={showReplyDialog} onOpenChange={setShowReplyDialog}>
        <DialogContent className="glass-effect max-w-2xl">
          <DialogHeader>
            <DialogTitle>Reply to {selectedMessage?.name}</DialogTitle>
          </DialogHeader>
          
          {selectedMessage && (
            <div className="space-y-4">
              {/* Original Message */}
              <div className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-medium mb-2">Original Message:</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Subject:</strong> {selectedMessage.subject}
                </p>
                <p className="text-sm">{selectedMessage.message}</p>
              </div>

              {/* Reply Form */}
              <div>
                <label className="block text-sm font-medium mb-2">Your Reply:</label>
                <Textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply here..."
                  rows={6}
                  className="resize-none"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowReplyDialog(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={sendReply}
                  disabled={!replyText.trim()}
                  className="bg-gradient-accent"
                >
                  Send Reply
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};