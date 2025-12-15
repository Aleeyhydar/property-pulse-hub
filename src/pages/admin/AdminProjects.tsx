import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Star } from "lucide-react";
import { Project } from "@/data/projects";

export default function AdminProjects() {
  const { projects, addProject, updateProject, deleteProject } = useAdmin();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState<Partial<Project>>({
    title: "",
    description: "",
    fullDescription: "",
    category: "residential",
    status: "completed",
    location: "",
    image: "",
    images: [],
    featured: false,
    specifications: {
      area: "",
      bedrooms: undefined,
      bathrooms: undefined,
      floors: undefined,
      yearCompleted: ""
    }
  });

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      fullDescription: "",
      category: "residential",
      status: "completed",
      location: "",
      image: "",
      images: [],
      featured: false,
      specifications: {
        area: "",
        bedrooms: undefined,
        bathrooms: undefined,
        floors: undefined,
        yearCompleted: ""
      }
    });
    setEditingProject(null);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData(project);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProject) {
      updateProject(editingProject.id, formData);
      toast({ title: "Project updated successfully" });
    } else {
      addProject(formData as Omit<Project, "id">);
      toast({ title: "Project added successfully" });
    }
    
    setIsDialogOpen(false);
    resetForm();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      deleteProject(id);
      toast({ title: "Project deleted successfully" });
    }
  };

  const toggleFeatured = (project: Project) => {
    updateProject(project.id, { featured: !project.featured });
    toast({ 
      title: project.featured ? "Removed from featured" : "Added to featured" 
    });
  };

  return (
    <AdminLayout title="Real Estate Projects" description="Manage your real estate portfolio">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Projects ({projects.length})</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={(open) => { setIsDialogOpen(open); if (!open) resetForm(); }}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingProject ? "Edit Project" : "Add New Project"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input 
                      value={formData.title} 
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Location</Label>
                    <Input 
                      value={formData.location} 
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Short Description</Label>
                  <Input 
                    value={formData.description} 
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label>Full Description</Label>
                  <Textarea 
                    value={formData.fullDescription} 
                    onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select 
                      value={formData.category} 
                      onValueChange={(value: "residential" | "commercial") => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select 
                      value={formData.status} 
                      onValueChange={(value: "sold" | "leased" | "completed") => setFormData({ ...formData, status: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="sold">Sold</SelectItem>
                        <SelectItem value="leased">Leased</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Main Image URL</Label>
                  <Input 
                    value={formData.image} 
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://..."
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Area</Label>
                    <Input 
                      value={formData.specifications?.area} 
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        specifications: { ...formData.specifications!, area: e.target.value }
                      })}
                      placeholder="850 sqm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Bedrooms</Label>
                    <Input 
                      type="number"
                      value={formData.specifications?.bedrooms || ""} 
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        specifications: { ...formData.specifications!, bedrooms: parseInt(e.target.value) || undefined }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Bathrooms</Label>
                    <Input 
                      type="number"
                      value={formData.specifications?.bathrooms || ""} 
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        specifications: { ...formData.specifications!, bathrooms: parseInt(e.target.value) || undefined }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Year</Label>
                    <Input 
                      value={formData.specifications?.yearCompleted} 
                      onChange={(e) => setFormData({ 
                        ...formData, 
                        specifications: { ...formData.specifications!, yearCompleted: e.target.value }
                      })}
                      placeholder="2024"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Switch 
                    checked={formData.featured} 
                    onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                  />
                  <Label>Featured Project</Label>
                </div>

                <div className="flex gap-2 justify-end">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingProject ? "Update Project" : "Add Project"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-medium">{project.title}</p>
                          <p className="text-sm text-muted-foreground line-clamp-1">{project.description}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="capitalize">{project.category}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === "sold" ? "bg-green-500/10 text-green-500" :
                        project.status === "leased" ? "bg-blue-500/10 text-blue-500" :
                        "bg-gray-500/10 text-gray-500"
                      }`}>
                        {project.status}
                      </span>
                    </TableCell>
                    <TableCell>{project.location}</TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => toggleFeatured(project)}
                      >
                        <Star className={`h-4 w-4 ${project.featured ? "fill-yellow-500 text-yellow-500" : ""}`} />
                      </Button>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(project)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(project.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
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
