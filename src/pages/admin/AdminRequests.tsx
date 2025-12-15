import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Eye, CheckCircle, Clock, Download, Archive, Mail, Phone } from "lucide-react";
import { PropertyRequest } from "@/data/propertyRequests";

export default function AdminRequests() {
  const { requests, updateRequestStatus } = useAdmin();
  const { toast } = useToast();
  const [selectedRequest, setSelectedRequest] = useState<PropertyRequest | null>(null);
  const [filter, setFilter] = useState<"all" | "pending" | "handled">("all");

  const filteredRequests = requests.filter(r => {
    if (filter === "all") return true;
    return r.status === filter;
  });

  const pendingCount = requests.filter(r => r.status === "pending").length;
  const handledCount = requests.filter(r => r.status === "handled").length;

  const handleStatusChange = (id: string, status: PropertyRequest["status"]) => {
    updateRequestStatus(id, status);
    toast({ 
      title: `Request marked as ${status}`,
      description: status === "handled" ? "The client will be contacted shortly." : ""
    });
  };

  const exportToCSV = () => {
    const headers = ["Name", "Email", "Phone", "Property Type", "Location", "Budget", "Purpose", "Notes", "Status", "Date"];
    const rows = requests.map(r => [
      r.name,
      r.email,
      r.phone,
      r.propertyType,
      r.location,
      r.budget,
      r.purpose,
      r.notes,
      r.status,
      r.createdAt
    ]);
    
    const csvContent = [headers, ...rows].map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `property-requests-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    
    toast({ title: "Export complete", description: "CSV file has been downloaded." });
  };

  return (
    <AdminLayout title="Property Requests" description="Manage incoming property requests">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="cursor-pointer hover:border-primary transition-colors" onClick={() => setFilter("all")}>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Eye className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{requests.length}</p>
              <p className="text-sm text-muted-foreground">Total Requests</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:border-orange-500 transition-colors" onClick={() => setFilter("pending")}>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-500/10">
              <Clock className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{pendingCount}</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:border-green-500 transition-colors" onClick={() => setFilter("handled")}>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-green-500/10">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{handledCount}</p>
              <p className="text-sm text-muted-foreground">Handled</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <CardTitle>
              {filter === "all" ? "All Requests" : filter === "pending" ? "Pending Requests" : "Handled Requests"}
            </CardTitle>
            {filter !== "all" && (
              <Button variant="ghost" size="sm" onClick={() => setFilter("all")}>
                Clear filter
              </Button>
            )}
          </div>
          <Button onClick={exportToCSV}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Property Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Purpose</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{request.name}</p>
                        <p className="text-sm text-muted-foreground">{request.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>{request.propertyType}</TableCell>
                    <TableCell>{request.location}</TableCell>
                    <TableCell>{request.budget}</TableCell>
                    <TableCell className="capitalize">{request.purpose}</TableCell>
                    <TableCell>
                      <Badge variant={request.status === "pending" ? "secondary" : "default"} className={
                        request.status === "pending" 
                          ? "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20" 
                          : "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                      }>
                        {request.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(request.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon" onClick={() => setSelectedRequest(request)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg">
                          <DialogHeader>
                            <DialogTitle>Request Details</DialogTitle>
                          </DialogHeader>
                          {selectedRequest && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-sm text-muted-foreground">Client Name</p>
                                  <p className="font-medium">{selectedRequest.name}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Date Submitted</p>
                                  <p className="font-medium">{new Date(selectedRequest.createdAt).toLocaleDateString()}</p>
                                </div>
                              </div>
                              
                              <div className="flex gap-4">
                                <a href={`mailto:${selectedRequest.email}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                                  <Mail className="h-4 w-4" />
                                  {selectedRequest.email}
                                </a>
                                <a href={`tel:${selectedRequest.phone}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                                  <Phone className="h-4 w-4" />
                                  {selectedRequest.phone}
                                </a>
                              </div>

                              <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                                  <div>
                                    <p className="text-xs text-muted-foreground">Property Type</p>
                                    <p className="font-medium">{selectedRequest.propertyType}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Location</p>
                                    <p className="font-medium">{selectedRequest.location}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Budget</p>
                                    <p className="font-medium">{selectedRequest.budget}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-muted-foreground">Purpose</p>
                                    <p className="font-medium capitalize">{selectedRequest.purpose}</p>
                                  </div>
                                </div>
                                {selectedRequest.notes && (
                                  <div>
                                    <p className="text-xs text-muted-foreground">Additional Notes</p>
                                    <p className="text-sm mt-1">{selectedRequest.notes}</p>
                                  </div>
                                )}
                              </div>

                              <div className="flex gap-2 pt-4 border-t">
                                {selectedRequest.status === "pending" ? (
                                  <Button 
                                    className="flex-1"
                                    onClick={() => {
                                      handleStatusChange(selectedRequest.id, "handled");
                                      setSelectedRequest({ ...selectedRequest, status: "handled" });
                                    }}
                                  >
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Mark as Handled
                                  </Button>
                                ) : (
                                  <Button 
                                    variant="outline"
                                    className="flex-1"
                                    onClick={() => {
                                      handleStatusChange(selectedRequest.id, "pending");
                                      setSelectedRequest({ ...selectedRequest, status: "pending" });
                                    }}
                                  >
                                    <Clock className="h-4 w-4 mr-2" />
                                    Mark as Pending
                                  </Button>
                                )}
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      {request.status === "pending" ? (
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => handleStatusChange(request.id, "handled")}
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        </Button>
                      ) : (
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => handleStatusChange(request.id, "pending")}
                        >
                          <Clock className="h-4 w-4 text-orange-500" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
