// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: crossdomain/validity.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Validity struct {
	Id        uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	NotBefore string `protobuf:"bytes,2,opt,name=notBefore,proto3" json:"notBefore,omitempty"`
	NotAfter  string `protobuf:"bytes,3,opt,name=notAfter,proto3" json:"notAfter,omitempty"`
	Creator   string `protobuf:"bytes,4,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *Validity) Reset()         { *m = Validity{} }
func (m *Validity) String() string { return proto.CompactTextString(m) }
func (*Validity) ProtoMessage()    {}
func (*Validity) Descriptor() ([]byte, []int) {
	return fileDescriptor_8391d10805471213, []int{0}
}
func (m *Validity) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Validity) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Validity.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Validity) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Validity.Merge(m, src)
}
func (m *Validity) XXX_Size() int {
	return m.Size()
}
func (m *Validity) XXX_DiscardUnknown() {
	xxx_messageInfo_Validity.DiscardUnknown(m)
}

var xxx_messageInfo_Validity proto.InternalMessageInfo

func (m *Validity) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Validity) GetNotBefore() string {
	if m != nil {
		return m.NotBefore
	}
	return ""
}

func (m *Validity) GetNotAfter() string {
	if m != nil {
		return m.NotAfter
	}
	return ""
}

func (m *Validity) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*Validity)(nil), "crossdomain.crossdomain.Validity")
}

func init() { proto.RegisterFile("crossdomain/validity.proto", fileDescriptor_8391d10805471213) }

var fileDescriptor_8391d10805471213 = []byte{
	// 184 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4a, 0x2e, 0xca, 0x2f,
	0x2e, 0x4e, 0xc9, 0xcf, 0x4d, 0xcc, 0xcc, 0xd3, 0x2f, 0x4b, 0xcc, 0xc9, 0x4c, 0xc9, 0x2c, 0xa9,
	0xd4, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x47, 0x92, 0xd3, 0x43, 0x62, 0x2b, 0xe5, 0x71,
	0x71, 0x84, 0x41, 0x95, 0x0a, 0xf1, 0x71, 0x31, 0x65, 0xa6, 0x48, 0x30, 0x2a, 0x30, 0x6a, 0xb0,
	0x04, 0x31, 0x65, 0xa6, 0x08, 0xc9, 0x70, 0x71, 0xe6, 0xe5, 0x97, 0x38, 0xa5, 0xa6, 0xe5, 0x17,
	0xa5, 0x4a, 0x30, 0x29, 0x30, 0x6a, 0x70, 0x06, 0x21, 0x04, 0x84, 0xa4, 0xb8, 0x38, 0xf2, 0xf2,
	0x4b, 0x1c, 0xd3, 0x4a, 0x52, 0x8b, 0x24, 0x98, 0xc1, 0x92, 0x70, 0xbe, 0x90, 0x04, 0x17, 0x7b,
	0x72, 0x51, 0x6a, 0x62, 0x49, 0x7e, 0x91, 0x04, 0x0b, 0x58, 0x0a, 0xc6, 0x75, 0xb2, 0x3c, 0xf1,
	0x48, 0x8e, 0xf1, 0xc2, 0x23, 0x39, 0xc6, 0x07, 0x8f, 0xe4, 0x18, 0x27, 0x3c, 0x96, 0x63, 0xb8,
	0xf0, 0x58, 0x8e, 0xe1, 0xc6, 0x63, 0x39, 0x86, 0x28, 0x79, 0x64, 0xe7, 0x57, 0xe8, 0x23, 0xf3,
	0x4a, 0x2a, 0x0b, 0x52, 0x8b, 0x93, 0xd8, 0xc0, 0x5e, 0x31, 0x06, 0x04, 0x00, 0x00, 0xff, 0xff,
	0xae, 0x9e, 0x15, 0xa7, 0xe8, 0x00, 0x00, 0x00,
}

func (m *Validity) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Validity) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Validity) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintValidity(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.NotAfter) > 0 {
		i -= len(m.NotAfter)
		copy(dAtA[i:], m.NotAfter)
		i = encodeVarintValidity(dAtA, i, uint64(len(m.NotAfter)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.NotBefore) > 0 {
		i -= len(m.NotBefore)
		copy(dAtA[i:], m.NotBefore)
		i = encodeVarintValidity(dAtA, i, uint64(len(m.NotBefore)))
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintValidity(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintValidity(dAtA []byte, offset int, v uint64) int {
	offset -= sovValidity(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Validity) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovValidity(uint64(m.Id))
	}
	l = len(m.NotBefore)
	if l > 0 {
		n += 1 + l + sovValidity(uint64(l))
	}
	l = len(m.NotAfter)
	if l > 0 {
		n += 1 + l + sovValidity(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovValidity(uint64(l))
	}
	return n
}

func sovValidity(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozValidity(x uint64) (n int) {
	return sovValidity(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Validity) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowValidity
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Validity: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Validity: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field NotBefore", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthValidity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthValidity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.NotBefore = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field NotAfter", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthValidity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthValidity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.NotAfter = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowValidity
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthValidity
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthValidity
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipValidity(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthValidity
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipValidity(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowValidity
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowValidity
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowValidity
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthValidity
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupValidity
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthValidity
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthValidity        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowValidity          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupValidity = fmt.Errorf("proto: unexpected end of group")
)
