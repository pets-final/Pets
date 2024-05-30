import React, { useState, useEffect } from 'react';
import {
  Breadcrumb,
  Button,
  Checkbox,
  Label,
  Modal,
  Table,
  Textarea,
  TextInput,
} from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import {
  HiCog,
  HiDotsVertical,
  HiExclamationCircle,
  HiHome,
  HiOutlineExclamationCircle,
  HiPencilAlt,
  HiTrash,
  HiUpload,
} from "react-icons/hi";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import { Pagination } from "../users/list";
import app from "../../firebase";
import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
const db = getFirestore(app);
const dummyRequests = [
    {
      id: '1',
      name: 'Dr. John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '555-1234',
      address: '123 Main St, Springfield, IL',
      licenseNumber: 'VET123456',
      issuingCountry: 'USA',
      schoolAttended: 'University of Illinois College of Veterinary Medicine',
      graduationDate: '2015-06-15',
      details: 'Experienced in small animal care.',
      requestDate: '2023-05-01',
      status: 'pending'
    },
    {
      id: '2',
      name: 'Dr. Jane Smith',
      email: 'janesmith@example.com',
      phoneNumber: '555-5678',
      address: '456 Elm St, Springfield, IL',
      licenseNumber: 'VET654321',
      issuingCountry: 'USA',
      schoolAttended: 'Cornell University College of Veterinary Medicine',
      graduationDate: '2018-05-20',
      details: 'Specializes in large animal surgery.',
      requestDate: '2023-04-20',
      status: 'pending'
    },
    {
      id: '3',
      name: 'Dr. Alice Johnson',
      email: 'alicejohnson@example.com',
      phoneNumber: '555-9101',
      address: '789 Oak St, Springfield, IL',
      licenseNumber: 'VET987654',
      issuingCountry: 'Canada',
      schoolAttended: 'Ontario Veterinary College, University of Guelph',
      graduationDate: '2012-07-30',
      details: 'Focuses on exotic animals.',
      requestDate: '2023-03-15',
      status: 'pending'
    }
  ];
  
const Requests = () => {
    const [requests, setRequests] = useState(dummyRequests);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = (request) => {
      setSelectedRequest(request);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedRequest(null);
    };
  
    const handleApproveRequest = async (id) => {
       console.log(id);
        const userRef = doc(db, "users", id);

        // Update the user document
        try {
          await updateDoc(userRef, {
            accepted: true, // Add the 'accepted' key
          });
          console.log("User updated successfully");
        } catch (error) {
          console.error("Failed to update user:", error);
        }
      
    fetchRequests();
    };
  
    const handleRejectRequest = async (id) => {
    //   setRequests(prevRequests => prevRequests.filter(req => req.id !== id));
    //   handleCloseModal();
    await deleteDoc(doc(db, "veterinarians", id));
    fetchRequests();
    };
  const fetchRequests = async () => {
    const querySnapshot = await getDocs(collection(db, "veterinarians"));
    const requestsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setRequests(requestsData);
    
  };

  useEffect(() => {
    fetchRequests();
  }, []);
  
    return (
      <NavbarSidebarLayout isFooter={false}>
        <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
          <div className="mb-1 w-full">
            <div className="mb-4">
              <Breadcrumb className="mb-4">
                <Breadcrumb.Item href="#">
                  <div className="flex items-center gap-x-3">
                    <HiHome className="text-xl" />
                    <span className="dark:text-white">Home</span>
                  </div>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/e-commerce/products">
                  Users
                </Breadcrumb.Item>
                <Breadcrumb.Item>Requests</Breadcrumb.Item>
              </Breadcrumb>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                All Requests
              </h1>
            </div>
            <div className="block items-center sm:flex">
              <SearchForRequests />
              <div className="hidden space-x-1 border-l border-gray-100 pl-2 dark:border-gray-700 md:flex">
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Configure</span>
                  <HiCog className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Delete</span>
                  <HiTrash className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Purge</span>
                  <HiExclamationCircle className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Settings</span>
                  <HiDotsVertical className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                  <Table.Head className="bg-gray-100 dark:bg-gray-700">
                    <Table.HeadCell>
                      <span className="sr-only">Toggle selected</span>
                      <Checkbox />
                    </Table.HeadCell>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Phone</Table.HeadCell>
                    <Table.HeadCell>Address</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                    <Table.HeadCell>Actions</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                    {requests.map((request) => (
                      <Table.Row key={request.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <Table.Cell className="w-4 p-4">
                          <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <div className="text-base font-semibold text-gray-900 dark:text-white">
                            {request.fullname}
                          </div>
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                          {request.mobilenumber}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                          {request.address}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                          {request.status}
                        </Table.Cell>
                        <Table.Cell className="space-x-2 whitespace-nowrap p-4">
                          <div className="flex items-center gap-x-3">
                            <Button onClick={() => handleOpenModal(request)}>
                              View
                            </Button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </div>
            </div>
          </div>
        </div>
        {selectedRequest && (
          <RequestModal
            request={selectedRequest}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onApprove={handleApproveRequest}
            onReject={handleRejectRequest}
          />
        )}
      </NavbarSidebarLayout>
    );
  };

export default Requests;

const SearchForRequests = () => {
  return (
    <form className="mb-4 sm:mb-0 sm:pr-3" action="#" method="GET">
      <Label htmlFor="requests-search" className="sr-only">
        Search
      </Label>
      <div className="relative mt-1 lg:w-64 xl:w-96">
        <TextInput
          id="requests-search"
          name="requests-search"
          placeholder="Search for requests"
        />
      </div>
    </form>
  );
};
const RequestsTable = ({ requests, onOpenModal }) => {
    return (
      <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
        <Table.Head className="bg-gray-100 dark:bg-gray-700">
          <Table.HeadCell>
            <span className="sr-only">Toggle selected</span>
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Request Date</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
          {requests.map((request) => (
            <Table.Row key={request.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <Table.Cell className="w-4 p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                <div className="text-base font-semibold text-gray-900 dark:text-white">
                  {request.name}
                </div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {request.email}
                </div>
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                {new Date(request.requestDate).toLocaleDateString()}
              </Table.Cell>
              <Table.Cell className="space-x-2 whitespace-nowrap p-4">
                <div className="flex items-center gap-x-3">
                  <Button onClick={() => onOpenModal(request)}>
                    View
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  };

  
  const RequestModal = ({ request, isOpen, onClose, onApprove, onReject }) => {
    
    console.log(request);
    return (
      <Modal show={isOpen} size="lg" onClose={onClose}>
        <Modal.Header>
          Veterinarian Verification Request
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <Label htmlFor="name" value="Name" />
              <TextInput id="name" value={request.name} readOnly />
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput id="email" value={request.email} readOnly />
            </div>
            <div>
              <Label htmlFor="phoneNumber" value="Phone Number" />
              <TextInput id="phoneNumber" value={request.phoneNumber} readOnly />
            </div>
            <div>
              <Label htmlFor="address" value="Address" />
              <TextInput id="address" value={request.address} readOnly />
            </div>
            <div>
              <Label htmlFor="licenseNumber" value="Veterinary License Number" />
              <TextInput id="licenseNumber" value={request.licenseNumber} readOnly />
            </div>
            <div>
              <Label htmlFor="issuingCountry" value="Issuing State or Country" />
              <TextInput id="issuingCountry" value={request.issuingCountry} readOnly />
            </div>
            <div>
              <Label htmlFor="schoolAttended" value="Veterinary School Attended" />
              <TextInput id="schoolAttended" value={request.schoolAttended} readOnly />
            </div>
            <div>
              <Label htmlFor="graduationDate" value="Graduation Date" />
              <TextInput id="graduationDate" value={request.graduationDate} readOnly />
            </div>
            <div>
              <Label htmlFor="details" value="Details" />
              <Textarea id="details" value={request.details} rows={4} readOnly />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onApprove(request.uid)} color="success">
            Approve
          </Button>
          <Button onClick={() => onReject(request.id)} color="failure">
            Reject
          </Button>
          <Button onClick={onClose} color="gray">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  
  
  